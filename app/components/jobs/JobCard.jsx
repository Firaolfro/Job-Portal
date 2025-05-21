import { Badge } from "./Badge";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        {job.isFeatured && <Badge text="Featured" color="bg-yellow-400" />}
      </div>
      <p className="text-gray-600 font-medium">{job.company}</p>
      <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
        <FaMapMarkerAlt className="text-blue-500" />
        <span>{job.location}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge text={job.type} />
        {job.isRemote && <Badge text="Remote" />}
        <Badge text={job.salary} color="bg-green-100 text-green-800" />
      </div>
      <div className="flex gap-2 mt-4 flex-wrap">
        {job.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
