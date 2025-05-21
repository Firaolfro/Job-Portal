"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Dummy jobsData - You might import this from another file
const jobsData = [
  {
    id: "1",
    company: "Reddit",
    logo: "/logos/reddit.png",
    location: "United Kingdom of Great Britain",
    title: "Marketing Officer",
    type: "Full Time",
    salary: "$30K-$35K",
    featured: true,
    category: "Marketing",
    experience: "1-2 Years",
    education: "Graduation",
    jobLevel: "Mid Level",
    description: "Exciting opportunity to lead marketing initiatives...",
    responsibilities: [
      "Develop marketing strategies",
      "Manage social media",
      "Analyze campaign performance",
    ],
    companyInfo: { website: "https://www.reddit.com" },
  },
  {
    id: "2",
    company: "Dribbble",
    logo: "/logos/dribbble.png",
    location: "California",
    title: "Senior UX Designer.",
    type: "Full-Time",
    salary: "$50K-80K/month",
    featured: true,
    category: "Design",
    experience: "4-6 Years",
    education: "Master Degree",
    jobLevel: "Mid Level",
    description: "Lead the user experience design for our flagship product...",
    responsibilities: [
      "User research",
      "Wireframing and prototyping",
      "Usability testing",
    ],
    companyInfo: { website: "https://dribbble.com" },
  },
  {
    id: "3",
    company: "Freepik",
    logo: "/logos/freepik.png",
    location: "China",
    title: "Visual Designer",
    type: "Full Time",
    salary: "$10K-$15K",
    featured: true,
    category: "Design",
    experience: "Freshers",
    education: "High School",
    jobLevel: "Entry Level",
    description: "Create stunning visuals for our platform...",
    responsibilities: [
      "Graphic design",
      "Illustration",
      "Brand asset creation",
    ],
    companyInfo: { website: "https://www.freepik.com" },
  },
  {
    id: "4",
    company: "Figma",
    logo: "/logos/figma.png",
    location: "Canada",
    title: "UI/UX Designer",
    type: "Full Time",
    salary: "$50K-$70K",
    featured: true,
    category: "Design",
    experience: "2-4 Years",
    education: "Graduation",
    jobLevel: "Mid Level",
    description: "Design intuitive and engaging user interfaces...",
    responsibilities: ["UI design", "Interaction design", "Prototyping"],
    companyInfo: { website: "https://www.figma.com" },
  },
  {
    id: "5",
    company: "Dribbble",
    logo: "/logos/dribbble.png",
    location: "United States",
    title: "Junior Graphic Designer",
    type: "Temporary",
    salary: "$35K-$40K",
    featured: true,
    category: "Design",
    experience: "1-2 Years",
    education: "Graduation",
    jobLevel: "Entry Level",
    description: "Support the design team with graphic assets...",
    responsibilities: [
      "Creating marketing materials",
      "Assisting senior designers",
    ],
    companyInfo: { website: "https://dribbble.com" },
  },
  {
    id: "6",
    company: "Twitter",
    logo: "/logos/twitter.png",
    location: "Canada",
    title: "Senior UX Designer",
    type: "Internship",
    salary: "$50K-$60K",
    featured: true,
    category: "Design",
    experience: "4-6 Years",
    education: "Master Degree",
    jobLevel: "Mid Level",
    description: "Contribute to the user experience strategy for Twitter...",
    responsibilities: ["User research", "Information architecture"],
    companyInfo: { website: "https://twitter.com" },
  },
  {
    id: "7",
    company: "Microsoft",
    logo: "/logos/microsoft.png",
    location: "Australia",
    title: "Product Designer",
    type: "Full Time",
    salary: "$40K-$50K",
    featured: true,
    category: "Design",
    experience: "3-5 Years",
    education: "Graduation",
    jobLevel: "Mid Level",
    description: "Design and iterate on features for our core products...",
    responsibilities: [
      "User flows",
      "Visual design",
      "Collaboration with engineers",
    ],
    companyInfo: { website: "https://www.microsoft.com" },
  },
  {
    id: "8",
    company: "Upwork",
    logo: "/logos/upwork.png",
    location: "France",
    title: "Technical Support Specialist",
    type: "Full Time",
    salary: "$35K-$40K",
    featured: true,
    category: "Technical Support",
    experience: "2-4 Years",
    education: "Bachelor Degree",
    jobLevel: "Entry Level",
    description: "Provide technical assistance to our users...",
    responsibilities: ["Troubleshooting issues", "Customer support"],
    companyInfo: { website: "https://www.upwork.com" },
  },
  {
    id: "9",
    company: "Slack",
    logo: "/logos/slack.png",
    location: "Germany",
    title: "Networking Engineer",
    type: "Remote",
    salary: "$50K-$90K",
    featured: true,
    category: "Engineering",
    experience: "5-7 Years",
    education: "Master Degree",
    jobLevel: "Expert Level",
    description: "Design and maintain our network infrastructure...",
    responsibilities: ["Network configuration", "Security protocols"],
    companyInfo: { website: "https://slack.com" },
  },
];

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const foundJob = jobsData.find((job) => job.id === id);
      if (foundJob) {
        setJob(foundJob);
        setLoading(false);
      } else {
        setError("Job not found");
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return <div>Loading job details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>No job details available.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 p-6 bg-white shadow rounded-md">
        <div className="flex items-center mb-4">
          {job.logo && (
            <img
              src={job.logo}
              alt={job.company}
              className="h-16 w-16 rounded-full mr-4"
            />
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">
              {job.company} - {job.location}
            </p>
            <p className="text-sm text-gray-500">
              {job.type} | {job.salary}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Job Description
          </h3>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {job.responsibilities && job.responsibilities.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Responsibilities
            </h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Qualifications
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Experience: {job.experience} <br />
            Education: {job.education} <br />
            Job Level: {job.jobLevel}
          </p>
        </div>

        <div className="mt-6">
          <Link
            href="/find-jobs"
            className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md mr-2"
          >
            Back to Listings
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
