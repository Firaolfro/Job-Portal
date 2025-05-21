import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTumblr,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Myjob Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* Briefcase Icon (Replace with your actual icon/image) */}
              {/* <svg
                className="w-6 h-6 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A16.305 16.305 0 0112 15c-2.343 0-4.487-.79-6.255-2.245M12 15l-4 4m5-14a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg> */}

              <Link href="/" className="flex items-center  bg-white gap-2">
                <Image
                  src="/logo.png" // ← Replace this with your actual logo path or URL
                  alt="MyJob Logo"
                  width={80}
                  height={80}
                  className="w-25 h-10 object-contain"
                />

                {/* <span className="text-gray-700 text-xl font-bold">MyJob</span> */}
              </Link>
              {/* <h3 className="text-lg font-semibold">Myjob</h3> */}
            </div>
            <p className="text-sm mb-2">Call Now: +251 911 234 567</p>
            <p className="text-xs text-gray-500">Addis Ababa, Ethiopia</p>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/about-us" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link href="/contact-us" className="hover:text-blue-500">
                  Contact Us
                </Link>
              </li>

              <li className="mb-2">
                <Link href="#" className="hover:text-blue-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Candidate */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Candidate</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/find-job-2" className="hover:text-blue-500">
                  Browse Jobs
                </Link>
              </li>

              <li className="mb-2">
                <Link href="/find-employers" className="hover:text-blue-500">
                  Browse Employers
                </Link>
              </li>

              <li className="mb-2">
                <Link href="/dashboard" className="hover:text-blue-500">
                  Candidate Dashboard
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-blue-500">
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Employers</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-500">
                  Post A Job
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/find-candidate" className="hover:text-blue-500">
                  Browse Candidates
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/employer-dashboard-2"
                  className="hover:text-blue-500"
                >
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-500">
                  Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Support</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/faqs" className="hover:text-blue-500">
                  FAQS
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-blue-500"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 py-4 border-t border-gray-800 flex justify-between items-center text-sm">
          <p>© 2024 Myjob - Job Portal. All Rights Reserved.</p>
          <div className="flex gap-4">
            {/* Facebook Icon */}
            <Link
              href="#"
              className="hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            {/* Twitter Icon */}
            <Link href="#" className="hover:text-blue-500" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </Link>
            {/* Instagram Icon */}
            <Link
              href="#"
              className="hover:text-blue-500"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            {/* LinkedIn Icon */}
            <Link
              href="#"
              className="hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            {/* Tumblr Icon */}
            <Link href="#" className="hover:text-blue-500" aria-label="Tumblr">
              <FaTumblr className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
