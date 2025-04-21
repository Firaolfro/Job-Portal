"use client";

import { useSearchParams } from "next/navigation";
import EmailVerificationPage from "./EmailVerificationPage";

const EmailVerificationWrapper = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return <EmailVerificationPage email={email} />;
};

export default EmailVerificationWrapper;
