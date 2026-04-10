import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, selectService, details } =
      await request.json();

    // Determine recipients from env and validate against allowed domains
    const rawRecipients = process.env.SMTP_TO_EMAIL || "";
    const recipients = rawRecipients
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const allowedDomainsEnv =
      process.env.SMTP_ALLOWED_DOMAINS || process.env.SMTP_ALLOWED_DOMAIN || "";
    const allowedDomains = allowedDomainsEnv
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);

    if (!recipients.length) {
      console.warn("SMTP: No recipient configured in SMTP_TO_EMAIL");
      return NextResponse.json(
        { error: "No recipient configured" },
        { status: 500 },
      );
    }

    if (!allowedDomains.length) {
      console.warn(
        "SMTP: No allowed domains configured in SMTP_ALLOWED_DOMAINS / SMTP_ALLOWED_DOMAIN",
      );
      return NextResponse.json(
        { error: "Mail sending is disabled (no allowed domains configured)" },
        { status: 500 },
      );
    }

    // Validate every recipient is inside allowed domain(s)
    const invalidRecipients = recipients.filter((r) => {
      const parts = r.split("@");
      if (parts.length !== 2) return true;
      const domain = parts[1].toLowerCase();
      return !allowedDomains.some(
        (ad) => domain === ad || domain.endsWith(`.${ad}`),
      );
    });

    if (invalidRecipients.length > 0) {
      console.warn(
        "SMTP: Attempt to send to disallowed recipients:",
        invalidRecipients,
      );
      return NextResponse.json(
        { error: "Recipient domain not allowed" },
        { status: 403 },
      );
    }

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: recipients.join(","),
      subject: `New Form Submission from ${firstName} ${lastName}`,
      html: `
                <h2>New Form Submission</h2>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Service:</strong> ${selectService}</p>
                <p><strong>Details:</strong></p>
                <p>${details}</p>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
