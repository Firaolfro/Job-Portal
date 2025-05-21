"use client";

import { useState } from "react";
import {
  FaBirthdayCake,
  FaBookmark,
  FaDollarSign,
  FaDownload,
  FaEnvelope,
  FaFacebook,
  FaFlag,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLayerGroup,
  FaLinkedin,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
  FaTwitter,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const candidates = [
  {
    name: "Esther Howard",
    title: "Website Designer (UI/UX)",
    location: "Beverly Hills, California 90002",
    experience: "7 Years",
    email: "esther.howard@gmail.com",
    website: "www.estherhoward.com",
    birthday: "June 12, 1990",
    nationality: "American",
    gender: "Female",
    education: "Bachelor's in Graphic Design",
    biography: `I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma.
    
• Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites.
• Mobile Application User Experience and Interface Design - for all kinds of iOS/Android and Hybrid Mobile Applications.
• Wireframe Designs.`,
    coverLetter: `Dear Sir,



I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFWS job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.

I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.

Sincerely,

Esther Howard`,
    address: "Zone/Block Basement 1 Unit 52, 1372 Spring Avenue, Portland",
    phone: "+1-202-555-0141",
    secondaryPhone: "+1-202-555-0189",
  },
  {
    name: "Cody Fisher",
    title: "Marketing Officer",
    location: "New York, NY 10001",
    experience: "3 Years",
    email: "cody.fisher@example.com",
    website: "www.codyfisher.com",
    birthday: "March 15, 1992",
    nationality: "Canadian",
    gender: "Male",
    education: "Bachelor's in Marketing",
    biography: `Cody Fisher is a passionate Marketing Officer with a keen eye for creative campaigns and brand storytelling. With 3 years of experience in digital marketing and communication strategy, Cody has driven successful marketing campaigns across social and paid media platforms.

• Digital Marketing Strategy Development
• Social Media Campaign Management
• Brand Positioning and Messaging
• Content Marketing and SEO Optimization
• Analytics and Performance Tracking`,
    coverLetter: `Dear Hiring Manager,

As a Marketing Officer with 3 years of experience, I'm excited to bring my campaign expertise and strategic insight to your team. I specialize in crafting compelling messages that connect with audiences and drive growth.

In my current role at XYZ Corp, I've successfully increased our social media engagement by 45% and improved conversion rates by 30% through targeted campaigns. My ability to analyze market trends and consumer behavior allows me to develop strategies that deliver measurable results.

Thank you for your time and consideration.

Sincerely,
Cody Fisher`,
    address: "123 Marketing Ave, Suite 45, New York, NY 10001",
    phone: "+1-212-555-0198",
    secondaryPhone: "+1-212-555-0199",
  },

  {
    name: "Darrell Steward",
    title: "Interaction Designer",
    location: "New York, NY 10003",
    experience: "3 Years",
    email: "darrell.steward@example.com",
    website: "www.darrellsteward.com",
    birthday: "August 22, 1991",
    nationality: "British",
    gender: "Male",
    education: "Master's in Interaction Design",
    biography: `Darrell Steward is a dedicated Interaction Designer focused on creating intuitive digital experiences. With 3 years of experience, Darrell has worked on complex design systems and interfaces for apps and web platforms.

• User-Centered Design Approach
• Wireframing and Prototyping
• Design System Development
• Usability Testing
• Cross-Platform Design Solutions
• Accessibility Compliance`,
    coverLetter: `Dear Hiring Manager,

I'm writing to express my interest in the Interaction Designer role. My passion lies in creating seamless, user-friendly designs that align with business goals and user needs.

At ABC Design Studio, I've led the redesign of our flagship product's interface, resulting in a 40% reduction in user-reported issues and a 25% increase in user retention. My approach combines aesthetic sensibility with functional pragmatism to create designs that are both beautiful and effective.

I'd love the opportunity to contribute my skills to your design team.

Sincerely,
Darrell Steward`,
    address: "456 Design Street, Apt 3B, New York, NY 10003",
    phone: "+1-212-555-0176",
    secondaryPhone: "+1-212-555-0177",
  },
  {
    name: "Guy Hawkins",
    title: "Junior Graphic Designer",
    location: "New York, NY 10010",
    experience: "3 Years",
    email: "guy.hawkins@example.com",
    website: "www.guyhawkins.com",
    birthday: "November 5, 1993",
    nationality: "American",
    gender: "Male",
    education: "Associate's in Visual Arts",
    biography: `Guy Hawkins is a Junior Graphic Designer who brings creativity and bold visual ideas to life. With 3 years of experience, he has contributed to branding and promotional campaigns across multiple industries.

• Brand Identity Development
• Print and Digital Media Design
• Typography and Layout
• Photo Editing and Manipulation
• Adobe Creative Suite Expertise
• Marketing Collateral Creation`,
    coverLetter: `Dear Hiring Manager,

I'm excited to apply for the Junior Graphic Designer position. With a strong foundation in visual storytelling and a love for design, I'm eager to support your team with high-impact visuals.

During my tenure at DEF Creative, I've developed branding packages for 12+ clients, created social media graphics that increased engagement by 35%, and contributed to award-winning advertising campaigns. My ability to translate complex ideas into compelling visuals makes me a valuable asset to any creative team.

Thank you for your consideration.

Sincerely,
Guy Hawkins`,
    address: "789 Creative Lane, New York, NY 10010",
    phone: "+1-212-555-0154",
    secondaryPhone: "+1-212-555-0155",
  },
  {
    name: "Jane Cooper",
    title: "Senior UX Designer",
    location: "New York, NY 10016",
    experience: "3 Years",
    email: "jane.cooper@example.com",
    website: "www.janecooper.com",
    birthday: "April 18, 1989",
    nationality: "Australian",
    gender: "Female",
    education: "Bachelor's in Human-Computer Interaction",
    biography: `Jane Cooper is a Senior UX Designer passionate about user research and accessible design. She has 3 years of experience improving product usability and increasing customer satisfaction.

• User Research and Testing
• Information Architecture
• Interaction Design
• Accessibility Compliance
• UX Writing and Microcopy
• Design Thinking Workshops
• Stakeholder Management`,
    coverLetter: `Dear Hiring Manager,

I bring a deep understanding of user experience and accessibility to the table. I'm confident my skills in UX research and design would be a great fit for your mission-driven team.

At GHI Tech, I've implemented user research processes that reduced development rework by 60% and led the accessibility initiative that made our products compliant with WCAG 2.1 standards. My ability to bridge user needs with business objectives has consistently delivered products that satisfy both users and stakeholders.

Warm regards,
Jane Cooper`,
    address: "1010 Tech Boulevard, Apt 12C, New York, NY 10016",
    phone: "+1-212-555-0132",
    secondaryPhone: "+1-212-555-0133",
  },
  {
    name: "Theresa Webb",
    title: "Front End Developer",
    location: "New York, NY 10022",
    experience: "3 Years",
    email: "theresa.webb@example.com",
    website: "www.theresawebb.dev",
    birthday: "September 30, 1990",
    nationality: "American",
    gender: "Female",
    education: "Bachelor's in Computer Science",
    biography: `Theresa Webb is a Front End Developer with a strong sense of design and functionality. She crafts responsive and interactive web interfaces with 3 years of development experience using modern frameworks.

• React.js and Next.js Development
• Responsive Web Design
• Performance Optimization
• CSS/Sass Architecture
• Web Accessibility
• API Integration
• Cross-Browser Compatibility`,
    coverLetter: `Dear Hiring Team,

I'm eager to bring my front-end development expertise and eye for detail to your organization. I specialize in creating responsive interfaces and improving site performance.

At JKL Digital, I've developed 15+ production websites with average Lighthouse scores of 95+, implemented a design system that reduced development time by 40%, and mentored junior developers in modern front-end practices. My combination of technical skills and design sensibility allows me to build interfaces that are both functional and beautiful.

Looking forward to connecting.

Best,
Theresa Webb`,
    address: "2345 Code Avenue, New York, NY 10022",
    phone: "+1-212-555-0110",
    secondaryPhone: "+1-212-555-0111",
  },
  {
    name: "Kathryn Murphy",
    title: "Technical Support Specialist",
    location: "New York, NY 10017",
    experience: "3 Years",
    email: "kathryn.murphy@example.com",
    website: "www.kathrynmurphy.tech",
    birthday: "February 14, 1991",
    nationality: "Irish",
    gender: "Female",
    education: "Associate's in Information Technology",
    biography: `Kathryn Murphy is a Technical Support Specialist with 3 years of experience in diagnosing and resolving complex software and hardware issues. She values customer satisfaction and clarity in support communication.

• IT Help Desk Support
• Troubleshooting and Diagnostics
• Customer Service Excellence
• Technical Documentation
• System Administration
• Network Troubleshooting
• Software Installation and Configuration`,
    coverLetter: `Dear Team,

I'm writing to express my interest in the Technical Support Specialist position. My focus has always been on delivering quick, effective support and ensuring smooth IT operations.

At MNO Solutions, I've maintained a 98% customer satisfaction rating, reduced average ticket resolution time by 35%, and created knowledge base articles that decreased repeat tickets by 25%. My ability to explain technical concepts in simple terms and my patience with non-technical users make me particularly effective in support roles.

Thanks for your consideration.





Sincerely,
Kathryn Murphy`,
    address: "678 Support Street, New York, NY 10017",
    phone: "+1-212-555-0188",
    secondaryPhone: "+1-212-555-0189",
  },
  {
    name: "Marvin McKinney",
    title: "UI/UX Designer",
    location: "New York, NY 10011",
    experience: "3 Years",
    email: "marvin.mckinney@example.com",
    website: "www.marvinux.com",
    birthday: "July 7, 1988",
    nationality: "American",
    gender: "Male",
    education: "Bachelor's in Digital Design",
    biography: `Marvin McKinney is a UI/UX Designer with 3 years of hands-on experience in designing sleek, intuitive user interfaces. His work is grounded in user research, data, and iterative design thinking.

• User Interface Design
• User Experience Research
• Prototyping and Wireframing
• Design Systems
• Mobile App Design
• Design Sprint Facilitation
• Product Strategy`,
    coverLetter: `Dear Hiring Manager,

I am thrilled to apply for the UI/UX Designer position. My experience in crafting user-centric designs aligns perfectly with your product vision.

At PQR Innovations, I've designed interfaces for 8+ products used by over 100,000 users, conducted user research that identified key pain points leading to a 50% reduction in support tickets, and created a design system that improved team efficiency by 30%. My data-driven approach ensures designs solve real user problems while meeting business objectives.

Let's create amazing digital experiences together.

All the best,
Marvin McKinney`,
    address: "910 Design Plaza, New York, NY 10011",
    phone: "+1-212-555-0166",
    secondaryPhone: "+1-212-555-0167",
  },
];

const CandidateModal = ({ candidate, onClose }) => {
  if (!candidate) return null;

  return (
    <>
      {/* Blurred Background */}
      <div
        className="fixed inset-0 backdrop-blur-[2px] z-40 bg-black/10"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white w-full max-w-6xl rounded-xl p-6 relative shadow-xl overflow-y-auto max-h-[90vh]">
          {/* Close Button - Now properly positioned and working */}
          <button
            onClick={onClose}
            className=" absolute top-3 right-3 z-50 text-gray-500 hover:text-black text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <FaTimes />
          </button>

          {/* Top Right Action Buttons */}
          <div className="absolute top-6 right-6 flex gap-4">
            <FaBookmark className="text-2xl text-gray-400 hover:text-blue-600 cursor-pointer" />
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaEnvelope className="text-lg" />
              <span>Send Mail</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Left Column (2/3 width) */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile Header with Avatar */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <FaUserCircle className="text-5xl text-gray-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {candidate.name}
                  </h1>
                  <p className="text-lg text-gray-600">{candidate.title}</p>
                </div>
              </div>

              {/* Biography Section */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  BIOGRAPHY
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-line">
                    {candidate.biography}
                  </p>
                </div>
              </section>

              {/* Horizontal Divider */}
              <hr className="border-t border-gray-200" />

              {/* Cover Letter Section */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  COVER LETTER
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-line">
                    {candidate.coverLetter}
                  </p>
                </div>
              </section>

              {/* Social Media Section */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Follow me on Social Media
                </h2>
                <div className="flex gap-4 text-blue-600 text-2xl">
                  <FaFacebook className="hover:text-blue-800 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-800 cursor-pointer" />
                  <FaInstagram className="hover:text-blue-800 cursor-pointer" />
                  <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
                  <FaGithub className="hover:text-blue-800 cursor-pointer" />
                </div>
              </section>
            </div>

            {/* Right Column (1/3 width) */}
            <div className="space-y-6 pt-6">
              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <FaBirthdayCake className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">DATE OF BIRTH</p>
                    <p className="text-sm">{candidate.birthday}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaFlag className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">NATIONALITY</p>
                    <p className="text-sm">{candidate.nationality}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUser className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">MARITAL STATUS</p>
                    <p className="text-sm">Single</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMale className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">GENDER</p>
                    <p className="text-sm">{candidate.gender}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaLayerGroup className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">EXPERIENCE</p>
                    <p className="text-sm">{candidate.experience}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">EDUCATION</p>
                    <p className="text-sm">{candidate.education}</p>
                  </div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <hr className="border-t border-gray-200" />

              {/* Resume Download */}
              <div className="border p-4 rounded-xl flex items-center justify-between bg-white">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Download My Resume
                  </h3>
                  <p className="text-sm text-gray-500">
                    {candidate.name} - PDF
                  </p>
                </div>
                <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <FaDownload className="text-xl" />
                </button>
              </div>

              {/* Horizontal Divider */}
              <hr className="border-t border-gray-200" />

              {/* Contact Information */}
              <div className="border p-4 rounded-xl bg-white space-y-4">
                <h3 className="font-semibold text-gray-800">CONTACT</h3>
                <div>
                  <p className="text-xs text-gray-500">WEBSITE</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaGlobe className="text-blue-500" />
                    <a
                      href={`https://${candidate.website}`}
                      className="text-blue-600 hover:underline"
                    >
                      {candidate.website}
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">LOCATION</p>
                  <div className="flex items-start gap-2 mt-1">
                    <FaMapMarkerAlt className="text-blue-500 mt-1" />
                    <div>
                      <p>{candidate.location}</p>
                      <p className="text-xs text-gray-500">
                        {candidate.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">PHONE</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaPhone className="text-blue-500" />
                    <span>{candidate.phone}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">SECONDARY PHONE</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaPhone className="text-blue-500" />
                    <span>{candidate.secondaryPhone}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">EMAIL ADDRESS</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FaEnvelope className="text-blue-500" />
                    <span>{candidate.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function CandidatePage() {
  const [showLevel, setShowLevel] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showRadius, setShowRadius] = useState(false);
  const [bookmarkIndex, setBookmarkIndex] = useState(null);
  const [radius, setRadius] = useState(32);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-[Poppins] font-light grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-4 md:px-10 lg:px-20 xl:px-40">
      {/* Sidebar Filters */}
      <div className="md:col-span-1 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setShowRadius(!showRadius)}
            className="font-semibold mb-2 w-full flex justify-between items-center"
          >
            Location Radius
            {showRadius ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showRadius && (
            <div className="mt-2">
              <h3 className="mb-2 text-sm">
                Selected: <span className="text-blue-600">{radius} miles</span>
              </h3>
              <input
                type="range"
                min="0"
                max="100"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setShowLevel(!showLevel)}
            className="font-semibold mb-2 w-full flex justify-between items-center"
          >
            Candidate Level
            {showLevel ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showLevel && (
            <div className="space-y-2 mt-2">
              {["Entry Level", "Mid Level", "Expert Level"].map((level, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="level"
                    value={level.toLowerCase()}
                    className="form-radio h-4 w-4 text-blue-600"
                    defaultChecked={level === "Mid Level"}
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setShowExp(!showExp)}
            className="font-semibold mb-2 w-full flex justify-between items-center"
          >
            Experience
            {showExp ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showExp && (
            <div className="space-y-2 mt-2">
              {[
                "Freshers",
                "1 - 2 Years",
                "2 - 4 Years",
                "4 - 6 Years",
                "6 - 8 Years",
                "8 - 10 Years",
                "10 - 15 Years",
                "15+ Years",
              ].map((exp, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="experience"
                    value={exp}
                    className="form-radio h-4 w-4 text-blue-600"
                    defaultChecked={exp === "4 - 6 Years"}
                  />
                  <span>{exp}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setShowEdu(!showEdu)}
            className="font-semibold mb-2 w-full flex justify-between items-center"
          >
            Education
            {showEdu ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showEdu && (
            <div className="space-y-2 mt-2">
              {[
                "All",
                "High School",
                "Intermediate",
                "Graduation",
                "Master Degree",
                "Bachelor Degree",
              ].map((edu, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    defaultChecked={edu === "Graduation"}
                  />
                  <span>{edu}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setShowGender(!showGender)}
            className="font-semibold mb-2 w-full flex justify-between items-center"
          >
            Gender
            {showGender ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {showGender && (
            <div className="space-y-2 mt-2">
              {["Male", "Female"].map((g, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g.toLowerCase()}
                    className="form-radio h-4 w-4 text-blue-600"
                    defaultChecked={g === "Male"}
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Candidate List */}
      <div className="md:col-span-3 space-y-4">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4 mb-4 md:mb-0">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {candidate.name}
                </h4>
                <p className="text-sm text-gray-600">{candidate.title}</p>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="text-gray-400" />{" "}
                  {candidate.location}
                  <span className="flex items-center ml-4">
                    <FaDollarSign className="text-gray-400 mr-1" />{" "}
                    {candidate.experience}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaBookmark
                className={`cursor-pointer text-xl ${
                  bookmarkIndex === index
                    ? "text-blue-600"
                    : "text-gray-400 hover:text-blue-600"
                } transition-colors`}
                onClick={() =>
                  setBookmarkIndex(bookmarkIndex === index ? null : index)
                }
              />
              <button
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                onClick={() => {
                  setSelectedCandidate(candidate);
                  setShowModal(true);
                }}
              >
                View Profile <HiArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <CandidateModal
          candidate={selectedCandidate}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
