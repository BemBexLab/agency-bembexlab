"use client";
import Error from "next/error";

export default function GlobalError({ error }) {
  // Sentry removed — keep the component minimal.
  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
