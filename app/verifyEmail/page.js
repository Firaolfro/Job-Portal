// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import EmailVerificationPage from "./EmailVerificationPage";

// const Page = () => {
//   const searchParams = useSearchParams();
//   const initialEmail = searchParams.get("email");
//   const [email, setEmail] = useState(initialEmail || "");

//   // Update local state if the email in query params changes (e.g., after resend)
//   useEffect(() => {
//     const currentEmail = searchParams.get("email");
//     if (currentEmail) {
//       setEmail(currentEmail);
//     }
//   }, [searchParams]);

//   return <EmailVerificationPage initialEmail={email} />;
// };

// export default Page;
// app/verifyEmail/page.jsx

// app/verifyEmail/page.jsx
"use client";

import { useSearchParams } from "next/navigation";
import EmailVerificationPage from "./EmailVerificationPage";

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return <EmailVerificationPage email={email} />;
};

export default Page;
