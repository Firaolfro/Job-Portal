"use client";

import dynamic from "next/dynamic";

const EmailVerificationWrapper = dynamic(
  () => import("./EmailVerificationWrapper"),
  {
    ssr: false, // This is now allowed in a Client Component
  }
);

const ClientEmailVerificationWrapper = () => {
  return <EmailVerificationWrapper />;
};

export default ClientEmailVerificationWrapper;
