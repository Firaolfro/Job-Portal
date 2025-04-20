"use client";
import { useRouter } from "next/navigation";

const jobList = [
  { title: "Anesthesiologists", positions: "45,904" },
  { title: "Surgeons", positions: "50,304" },
  { title: "Obstetricians-Gynecologists", positions: "4,330" },
  { title: "Orthodontists", positions: "20,079" },
  { title: "Maxillofacial Surgeons", positions: "74,875" },
  { title: "Software Developer", positions: "63,559" },
  { title: "Psychiatrists", positions: "18,599" },
  { title: "Data Scientist", positions: "28,200" },
  { title: "Financial Manager", positions: "65,281" },
  { title: "Management Analysis", positions: "89,046" },
  { title: "IT Manager", positions: "90,363" },
  { title: "Operations Research Analysis", positions: "16,627" },
];

const MostPopularVacancies = () => {
  const router = useRouter();

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Most Popular Vacancies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6 text-left">
          {jobList.map(({ title, positions }, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:bg-gray-50 p-3 rounded-md transition shadow-sm hover:shadow-md"
              onClick={() =>
                router.push(`/jobs/search?role=${encodeURIComponent(title)}`)
              }
            >
              <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-500 transition">
                {title}
              </h3>
              <p className="text-xs text-gray-500">
                {positions} Open Positions
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularVacancies;
