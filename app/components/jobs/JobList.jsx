import JobCard from "./JobCard";

// Dummy data for now (replace with API or local JSON later)
const jobs = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    company: "TechEdge",
    location: "Addis Ababa",
    type: "Full Time",
    isRemote: true,
    isFeatured: true,
    salary: "12k-15k/mo",
    tags: ["Design", "Figma", "Adobe XD"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "CodeBase Ltd.",
    location: "Remote",
    type: "Part Time",
    isRemote: true,
    isFeatured: false,
    salary: "10k-13k/mo",
    tags: ["React", "Node", "MongoDB"],
  },
];

export default function JobList() {
  return (
    <div className="grid gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
