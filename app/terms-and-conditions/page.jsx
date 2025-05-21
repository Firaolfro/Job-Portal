"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300"], // Changed to 300
  subsets: ["latin"],
});

const TermsPage = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col min-h-screen px-8 py-12 bg-gray-50`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Terms Content */}
        <div className="flex-1">
          {/* Section 1 */}
          <section id="terms" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              01. Terms & Condition
            </h2>
            <p className="text-gray-600 mb-6">
              Praesent placerat dictum elementum. Nam pulvinar urna vel lectus
              maximus, eget faucibus turpis hendrerit. Sed iaculis molestie
              arcu, et accumsan nisl. Quisque molestie velit vitae ligula luctus
              bibendum.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                In ac turpis mi. Donec quis semper neque. Nulla cursus gravida
                interdum.
              </li>
              <li>
                Curabitur luctus sapien augue, mattis faucibus nisi vehicula
                nec.
              </li>
              <li>
                Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam
                a et dolor.
              </li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>
                Integer feugiat lacus ut efficitur mattis. Sed quis molestie
                velit.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="limitations" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              02. Limitations
            </h2>
            <p className="text-gray-600 mb-6">
              In pretium est sit amet diam feugiat eleifend. Curabitur
              consectetur fringilla metus. Morbi hendrerit facilisis tincidunt.
              Sed condimentum lacinia arcu. Ut ut iaculis metus.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                In ac turpis mi. Donec quis semper neque. Nulla cursus gravida
                interdum.
              </li>
              <li>Curabitur luctus sapien augue.</li>
              <li>
                Mattis faucibus nisi vehicula nec, Mauris at scelerisque lorem.
              </li>
              <li>
                Nullam tempus felis ipsum, sagittis malesuada nulla vulputate
                et.
              </li>
              <li>Vivamus nec neque a libero sodales aliquam a et dolor.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              03. Security
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ex neque, elementum eu blandit in, ornare eu purus. Fusce eu
              rhoncus mi, quis ultricies lacus.
            </p>
          </section>

          {/* Section 4 */}
          <section id="privacy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              04. Privacy Policy
            </h2>
            <p className="text-gray-600 mb-6">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
              Aliquam metus mauris, semper eu eros vitae, blandit tristique
              metus. Vestibulum maximus nec justo sed maximus.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>
                In ac turpis mi. Donec quis semper neque. Nulla cursus gravida
                interdum.
              </li>
              <li>
                Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis
                malesuada nulla vulputate et.
              </li>
              <li>Aenean vel metus leo.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>
                Integer feugiat lacus ut efficitur mattis. Sed quis molestie
                velit.
              </li>
            </ul>
            <p className="text-gray-600">
              Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem
              ullamcorper. Aliquam vitae iaculis urna. Donec ultrices nulla a
              enim pulvinar, quis pulvinar lacus consectetur.
            </p>
          </section>
        </div>

        {/* Right Side - Table of Contents */}
        <div className="hidden md:block w-64 sticky top-20">
          <div className="border-l pl-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
              TABLE OF CONTENTS
            </h3>
            <ul className="space-y-4 text-sm text-black">
              <li>
                <a href="#terms" className="hover:underline">
                  01. Terms & Condition
                </a>
              </li>
              <li>
                <a href="#limitations" className="hover:underline">
                  02. Limitations
                </a>
              </li>
              <li>
                <a href="#security" className="hover:underline">
                  03. Security
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  04. Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
