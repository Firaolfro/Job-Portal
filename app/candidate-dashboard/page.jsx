// app/candidate-dashboard/page.jsx
"use client"; // Keep this if your page has interactive elements

import {
  Bell,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Heart,
} from "lucide-react"; // Add imports for icons
import Image from "next/image";

// StatCard component (can be here or in a separate components folder)
function StatCard({ title, value, icon, bgColor, iconColor }) {
  return (
    <div
      className={`${bgColor} rounded-lg p-6 flex items-center justify-between`}
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
      <div className={`ml-4 p-3 rounded-full ${iconColor} bg-white`}>
        {icon}
      </div>
    </div>
  );
}

// JobRow component (can be here or in a separate components folder)
function JobRow({ title, type, date, location, salary, image }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <div className="flex items-center">
          <Image
            src={image}
            alt={title}
            width={40}
            height={40}
            className="rounded-full mr-3 border border-gray-200"
          />
          <div>
            <div className="font-medium">{title}</div>
            {location && (
              <div className="text-sm text-gray-500">{location}</div>
            )}
            {salary && <div className="text-sm text-gray-500">{salary}</div>}
          </div>
        </div>
      </td>
      <td className="p-4 text-gray-600">{type}</td>
      <td className="p-4 text-gray-600">{date}</td>
      <td className="p-4">
        <span className="inline-flex items-center text-green-600">
          <CheckCircle className="h-5 w-5 mr-1" />
          Active
        </span>
      </td>
      <td className="p-4">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View Details
        </button>
      </td>
    </tr>
  );
}

export default function DashboardOverviewPage() {
  const jobs = [
    {
      id: 1,
      title: "Networking Engineer",
      type: "Remote",
      date: "Feb 2, 2019 19:23",
      location: "Washington",
      salary: "$50k-80k/month",
      image: "/images/upwork.png",
    },
    {
      id: 2,
      title: "Product Designer",
      type: "Full Time",
      date: "Dec 7, 2019 10:55",
      location: "Dhaka",
      salary: "$50k-80k/month",
      image: "/images/apple.png",
    },
    {
      id: 3,
      title: "Junior Graphic Designer",
      type: "Temporary",
      date: "Feb 2, 2019 19:23",
      location: "Brazil",
      salary: "$50k-80k/month",
      image: "/images/dribble.png",
    },
    {
      id: 4,
      title: "Visual Designer",
      type: "Contract Base",
      date: "Dec 7, 2019 22:26",
      location: "Wisconsin",
      salary: "$50k-80k/month",
      image: "/images/microsoft.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Hello, Esther Howard
        </h1>
        <p className="text-gray-600">
          Here is your daily activities and job alerts
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Applied jobs"
          value="589"
          icon={<Briefcase size={20} />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Favorite jobs"
          value="238"
          icon={<Heart size={20} />}
          bgColor="bg-yellow-200"
          iconColor="text-red-600"
        />
        <StatCard
          title="Job Alerts"
          value="574"
          icon={<Bell size={20} />}
          bgColor="bg-green-200"
          iconColor="text-yellow-600"
        />
      </div>

      {/* Profile Completion Alert */}
      <div className="bg-orange-700 border border-indigo-100 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border-2 border-indigo-200">
              <Image
                src="/profile-picture.jpg"
                alt="Profile"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-medium text-white">
              Your profile editing is not completed.
            </h3>
            <p className="text-white mt-1 text-sm">
              Complete your profile editing & build your custom Resume
            </p>
          </div>

          <button className="bg-white hover:bg-indigo-50 text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 border border-indigo-200 rounded-lg flex items-center transition-colors">
            Edit Profile <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* Recently Applied Jobs */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Recently Applied</h2>
          <button className="text-gray-600 hover:text-blue-800 font-medium flex items-center">
            View All <ChevronRight className="ml-1" size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Job</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Date Applied</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Active</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <JobRow
                  key={job.id}
                  title={job.title}
                  type={job.type}
                  date={job.date}
                  location={job.location}
                  salary={job.salary}
                  image={job.image}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-12">
        © 2024 MyJob - Job Portal. All rights Reserved
      </footer>
    </div>
  );
}
