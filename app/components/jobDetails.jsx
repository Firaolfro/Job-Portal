import Head from "next/head";

const jobDetails = {
  id: "senior-ux-designer-instagram",
  title: "Senior UX Designer",
  company: "Instagram",
  featured: true,
  fullTime: true,
  website: "https://instagram.com/",
  phone: "(406) 555-0120",
  email: "career@instagram.com",
  expiresOn: "June 30, 2021",
  postedOn: "June 14, 2021",
  education: "Graduation",
  salary: "$130k-$160k/year",
  location: "New York, USA",
  jobType: "Full Time",
  experience: "10-15 Years",
  description: `Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis elit est, laoreet rhoncus tincidunt vitae, vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod et id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.

Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit amet orci interdum tincidunt.`,
  responsibilities: [
    "Quisque semper gravida est et consectetur.",
    "Curabitur blandit lorem velit, vitae pretium leo placerat eget.",
    "Morbi mattis ipsum ac tempus.",
    "Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec, vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.",
    "lobortis vel lectus, nulla at risus ut diam.",
    "commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.",
    "odio metus posuere lorem, id condimentum erat velit nec neque.",
    "dui sodales ut. Curabitur tempus augue.",
  ],
  companyInfo: {
    founded: "March 21, 2006",
    organizationType: "Private Company",
    companySize: "120-300 Employees",
    email: "twitter@gmail.com", // Placeholder
    website: "https://twitter.com", // Placeholder
  },
};

export default function JobDetailPage() {
  return (
    <div>
      <Head>
        <title>
          {jobDetails.title} - {jobDetails.company}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden rounded-md">
          {/* Header Section */}
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://instagram.com/static/images/ico/xxhdpi_launcher.png/ed2e2b214b74.png"
                    alt={`${jobDetails.company} Logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {jobDetails.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {jobDetails.featured && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                    {jobDetails.fullTime && (
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Full Time
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <a
                      href={jobDetails.website}
                      className="text-blue-600 hover:underline"
                    >
                      {jobDetails.website}
                    </a>
                    <span className="ml-2">📞 {jobDetails.phone}</span>
                    <a
                      href={`mailto:${jobDetails.email}`}
                      className="text-blue-600 hover:underline ml-2"
                    >
                      {jobDetails.email}
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Apply Now
                </button>
                <p className="text-right text-sm text-gray-500 mt-1">
                  Job expires on {jobDetails.expiresOn}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Job Description and Responsibilities */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Job Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {jobDetails.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                  {jobDetails.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              {/* Share this job section */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Share this job:
                </h3>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm">
                    Facebook
                  </button>
                  <button className="bg-blue-400 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm">
                    Twitter
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md text-sm">
                    Pinterest
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Job Overview and Company Info */}
            <div className="space-y-4">
              <div className="bg-gray-50 border rounded-md p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Job Overview
                </h3>
                <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600">
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>Posted</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.postedOn}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">🗓️</span>
                      <span>Job Expires</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.expiresOn}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">🎓</span>
                      <span>Education</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.education}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">💰</span>
                      <span>Salary</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.salary}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Location</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.location}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">💼</span>
                      <span>Job Type</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.jobType}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2">⏱️</span>
                      <span>Experience</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {jobDetails.experience}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border rounded-md p-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src="https://instagram.com/static/images/ico/xxhdpi_launcher.png/ed2e2b214b74.png"
                      alt={`${jobDetails.company} Logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {jobDetails.company}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Social networking service
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                  <div>Founded in:</div>
                  <div className="font-semibold text-gray-900">
                    {jobDetails.companyInfo.founded}
                  </div>
                  <div>Organization type:</div>
                  <div className="font-semibold text-gray-900">
                    {jobDetails.companyInfo.organizationType}
                  </div>
                  <div>Company size:</div>
                  <div className="font-semibold text-gray-900">
                    {jobDetails.companyInfo.companySize}
                  </div>
                  <div>Phone:</div>
                  <div className="font-semibold text-gray-900">
                    {jobDetails.phone}
                  </div>
                  <div>Email:</div>
                  <div className="font-semibold text-gray-900">
                    <a
                      href={`mailto:${jobDetails.companyInfo.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {jobDetails.companyInfo.email}
                    </a>
                  </div>
                  <div>Website:</div>
                  <div className="font-semibold text-gray-900">
                    <a
                      href={jobDetails.companyInfo.website}
                      className="text-blue-600 hover:underline"
                    >
                      {jobDetails.companyInfo.website}
                    </a>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <a
                    href={`https://twitter.com/${jobDetails.company.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.39 5.05 5.05 0 002.14-2.72c-.98.6-2.05 1.03-3.21 1.26a5.07 5.07 0 00-8.79 4.79c-1.45-2.23-3.9-3.9-6.89-2.02a5.09 5.09 0 002.28 2.58c-.93-.03-1.79-.58-2.51-1.28a5.11 5.11 0 001.56 4.23c-.48 0-9.48-4.83-12.45-2.47a5.08 5.08 0 002.66 3.19c-.52-.04-1.1-.16-1.64-.38a5.13 5.13 0 004.79 3.56c-1.01-.4-2.08-.63-3.21-.63a5.1 5.1 0 004.81 3.74c-1.12-.49-2.31-.79-3.56-.79a5.09 5.09 0 004.3 3.16z" />
                    </svg>
                  </a>
                  <a
                    href={`https://facebook.com/${jobDetails.company.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.42V15.4h-2.06v-2.44h2.06V9.9c0-2.12 1.26-3.28 3.1-3.28 1.78 0 2.72.13 3.08.18v2.84h-2.1c-1.04 0-2.48.5-2.48 2.46v1.88h2.7l-.35 2.44h-2.35v9.42c3.97-1.25 6.84-5 6.84-9.42 0-5.52-4.48-10-10-10z" />
                    </svg>
                  </a>
                  {/* Add more social media icons as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
