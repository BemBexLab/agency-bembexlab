import Link from "next/link";

const Privacy = () => {
  return (
    <>
      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 text-gray-800">
        {/* Title */}
        <div className="text-4xl font-bold mb-8 text-center flex justify-center mt-[100px]">
          <h1 className="text-white mr-2">Privacy</h1>
          <h1 className="text-[#DE2F04]">Policy</h1>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-white">
            By using Bembex Lab and signing up as a Client, you agree to be legally bound by these Privacy Policy of Use, including those Privacy Policy incorporated by reference.
          </p>
        </section>

        {/* Scope and Information Collection */}
        <section className="mb-10">
          <p className="text-white">
            This privacy statement describes how Bembex Lab collects and uses the personal information you provide on our website:
            <Link
              href="https://bembexlab.com/"
              className="text-[#DE2F04] underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://bembexlab.com/
            </Link>{" "}
            also describes the choices available to you regarding our use of your personal information and how you can access and update this information.
          </p>

          <ul className="text-white pl-5 list-disc space-y-2 my-6">
            <li>We collect the following personal information from you:</li>
            <li>Contact Information such as name, email address, mailing address, phone number.</li>
            <li>Billing Information such as credit card number, and billing address.</li>
            <li>Preferences Information such as product wish lists, order history, marketing preferences.</li>
          </ul>

          <p className="text-white mt-3">
            We also collect the following information from you:
          </p>
          <ul className="text-white pl-5 list-disc space-y-2 mb-6">
            <li>Information about your business such as company name, company size, business type.</li>
          </ul>

          <p className="text-white">
            As is true of most websites, we automatically gather information about your computer such as your IP address, browser type, referring/exit pages, and operating system.
          </p>
        </section>

        {/* Use of Information */}
        <section className="text-white mb-10">
          <p className="mb-5">
            We use this information to:
          </p>
          <ul className="pl-5 list-disc space-y-1">
            <li>Fulfill your order</li>
            <li>Send you an order confirmation</li>
            <li>Assess the needs of your business to determine suitable products</li>
            <li>Send you requested product or service information</li>
            <li>Respond to customer service requests</li>
            <li>Administer your account</li>
            <li>Send you a catalog</li>
            <li>Send you a newsletter</li>
            <li>Send you marketing communications</li>
            <li>Respond to your questions and concerns</li>
          </ul>
        </section>

        {/* Choice/Opt-Out */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">Choice/Opt-Out</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or you can contact us at{" "}
              <a
                href="mailto:support@bembexlab.com"
                className="text-[#DE2F04] underline"
              >
                support@bembexlab.com
              </a>
              .
            </li>
            <li>
              The account will be de-activated if a customer is non-responsive for more than 15 days and an activation fee would be applied to proceed further.
            </li>
          </ul>
        </section>

        {/* Information Obtained from Third Parties */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Information Obtained from Third Parties
          </h2>
          <p>
            If you provide us personal information about others, or if others give us your information, we will only use that information for the specific reason for which it was provided to us.
          </p>
        </section>

        {/* Information Sharing */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">Information Sharing</h2>
          <p>
            We will share your personal information with third parties only in the ways that are described in
            this privacy statement. We do not sell your personal information to third parties. We may provide
            your personal information to companies that provide services to help us with our business
            activities such as shipping your order or offering customer service. These companies are
            authorized to use your personal information only as necessary to provide these services to us. 
            <br />
            We may also disclose your personal information as required by law such as to comply with a
            subpoena, or similar legal process when we believe in good faith that disclosure is necessary to
            protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a
            government request, if bembex lab is involved in a merger, acquisition, or sale of all or a portion
            of its assets, you will be notified via email and or a prominent notice on our website of any
            change in ownership or uses of your personal information, as well as any choices you may have
            regarding your personal information, to any other third party with your prior consent to do so. 
          </p>
        </section>

        {/* Third Party E-Commerce Solutions Provider */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Third Party E-Commerce Solutions Provider
          </h2>
          <p>
            Our shopping cart is hosted by our e-commerce solutions provider. They host our ordering
            system, and collect your billing information directly from you for the purpose of processing your
            order. This company does not use this information for any other purpose. 
          </p>
        </section>

        {/* Cookies and Other Tracking Technologies */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Cookies and Other Tracking Technologies
          </h2>
          <p>
            We may use cookies, for example, to keep track of your preferences and profile information.
            Cookies are also used to collect general usage and volume statistical information that does not
            include personal information.
            We use another company to place cookies on your computer to collect non-personally
            identifiable information to compile aggregated statistics for us about visitors to our site.
          </p>
        </section>

        {/* Web beacons */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">Web beacons</h2>
          <p>
            Our Web pages contain electronic images known as Web beacons (sometimes called single-pixel
            gifs) and are used along with cookies to compile aggregated statistics to analyze how our site is
            used and may be used in some of our emails to let us know which emails and links have been
            opened by recipients. This allows us to gauge the effectiveness of our customer communications
            and marketing campaigns. Our Web pages may also contain electronic images known as Web
            beacons (sometimes called single-pixel gifs) that are set by our third party partners. Web beacons
            are used along with cookies enabling our partners to compile aggregated statistics to analyze how
            our site is used. 
          </p>
        </section>

        {/* Links to Other Websites */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Links to Other Websites
          </h2>
          <p>
            Our Site includes links to other websites whose privacy practices may differ from those of
            bembexlab. If you submit personal information to any of those sites, your information is
            governed by their privacy statements. We encourage you to carefully read the privacy statement
            of any website you visit. 
          </p>
        </section>

        {/* Security */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              When we collect personal information directly from you, we follow generally accepted industry
              standards to protect the personal information submitted to us, both during transmission and once
              we receive it. No method of transmission over the Internet, or method of electronic storage, is
              100% secure, however. Therefore we cannot guarantee its absolute security. If you have any
              questions about security on our website, you can contact us at{" "}
              <a
                href="mailto:care@bembexlab.com"
                className="text-[#DE2F04] underline"
              >
                care@bembexlab.com
              </a>
              .
            </li>
            <li>
              In order to make a purchase from us, you must use our shopping cart provider to finalize and pay
              for your order. Its privacy statement and security practices will also apply to your information.
              We encourage you to read that privacy statement before providing your information. 
            </li>
          </ul>
        </section>

        {/* Additional Policy Information */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Additional Policy Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Our website includes Widgets, which are interactive mini-programs that run on our site to
              provide specific services from another company (e.g. displaying the news, opinions, music, etc).
              Personal information, such as your email address, may be collected through the Widget. Cookies
              may also be set by the Widget to enable it to function properly. Information collected by this
              Widget is governed by the privacy policy of the company that created it. 
            </li>
            <li>
              Our website offers publicly accessible blogs or community forums. You should be aware that any
              information you provide in these areas may be read, collected, and used by others who access
              them. 
            </li>
          </ul>
        </section>

        {/* Correcting and Updating Your Personal Information */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Correcting and Updating Your Personal Information
          </h2>
          <p>
            To review and update your personal information to ensure it is accurate, contact us at{" "}
            <a
              href="mailto:care@bembexlab.com"
              className="text-[#DE2F04] underline"
            >
              care@bembexlab.com
            </a>
            .
          </p>
        </section>

        {/* Notification of Privacy Statement Changes */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Notification of Privacy Statement Changes
          </h2>
          <p>
            We may update this privacy statement to reflect changes to our information practices. If we make
            any material changes we will notify you by email (sent to the e-mail address specified in your
            account) or by means of a notice on this Site prior to the change becoming effective. We
            encourage you to periodically review this page for the latest information on our privacy
            practices.
          </p>
        </section>

        {/* Mobile Number Collection and Use */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Mobile Number Collection and Use
          </h2>
          <p className="mb-4">
            When you provide your mobile number on our website, you are consenting to receive automated
            text messages from us. We collect and use your mobile number to send you important updates
            and notifications related to our services. You can opt-out at any time by replying STOP to our
            messages. We are committed to protecting your privacy and will not share your mobile number
            with third parties without your consent, except as required by law. We use appropriate technical
            and organizational measures to protect your personal information. 
          </p>
        </section>

        {/* Non-Disclosure of Consent Information */}
        <section className="text-white mb-10">
          <h2 className="text-[#DE2F04] text-3xl mb-4">
            Non-Disclosure of Consent Information
          </h2>
          <p>
            We recognize the importance of protecting your preferences and consent related to texting and
            communication. Therefore, we explicitly assure all customers that consent information collected
            for texting purposes will not be shared with, sold to, or accessed by any third parties, except as
            required by law. This includes any external partners or service providers involved in the delivery
            of our products and services. We commit to safeguarding your consent preferences and ensure
            they are strictly used for the intended communication purposes only.
          </p>
        </section>
      </main>
    </>
  );
};

export default Privacy;