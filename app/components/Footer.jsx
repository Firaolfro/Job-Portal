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
              <svg
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
              </svg>
              <h3 className="text-lg font-semibold">Myjob</h3>
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
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-blue-500 flex items-center gap-1"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Candidate */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Candidate</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Browse Employers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Employers</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Post A Job
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Browse Candidates
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Applications
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Support</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 py-4 border-t border-gray-800 flex justify-between items-center text-sm">
          <p>© 2024 Myjob - Job Portal. All Rights Reserved.</p>
          <div className="flex gap-4">
            {/* Facebook Icon */}
            <a href="#" className="hover:text-blue-500" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            {/* Twitter Icon */}
            <a href="#" className="hover:text-blue-500" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
            {/* Instagram Icon */}
            <a href="#" className="hover:text-blue-500" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            {/* LinkedIn Icon */}
            <a href="#" className="hover:text-blue-500" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            {/* Tumblr Icon */}
            <a href="#" className="hover:text-blue-500" aria-label="Tumblr">
              <FaTumblr className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
