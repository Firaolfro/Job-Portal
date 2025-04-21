// app/verifyEmail/page.tsx or page.jsx
import dynamic from "next/dynamic";

const EmailVerificationWrapper = dynamic(
  () => import("./EmailVerificationWrapper"),
  {
    ssr: false, // Prevents Next.js from rendering it on the server
  }
);

export default function VerifyEmailPage() {
  return <EmailVerificationWrapper />;
}
