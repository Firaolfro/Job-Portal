// "use client";
// import ContactForm from "/app/contact/page.jsx";

// //import SocialLinks from '@/components/SocialLinks';

// export default function HomePage() {
//   return <ContactForm />; //(
//   //     <main>
//   //       <Link href="/users">users</Link>
//   //   <SocialLinks />

//   // </main>
//   //   )
// }

// In your file: app/employer-dashboard/page.jsx

"use client";

import ContactForm from "./contact/page.jsx"; // Correct relative path

//import SocialLinks from '@/components/SocialLinks';
//import Link from 'next/link'

export default function HomePage() {
  return <ContactForm />;
}
