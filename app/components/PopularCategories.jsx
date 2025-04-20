"use client";

import {
  BarChart2,
  Brush,
  Code2,
  Database,
  Film,
  HeartPulse,
  Megaphone,
  Music2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = [
  {
    icon: <Brush className="w-5 h-5" />,
    title: "Graphics & Design",
    positions: 357,
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Code & Programing",
    positions: 312,
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Digital Marketing",
    positions: 297,
  },
  {
    icon: <Film className="w-5 h-5" />,
    title: "Video & Animation",
    positions: 247,
  },
  {
    icon: <Music2 className="w-5 h-5" />,
    title: "Music & Audio",
    positions: 204,
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Account & Finance",
    positions: 167,
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Health & Care",
    positions: 125,
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data & Science",
    positions: 57,
  },
];

const PopularCategories = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCategoryClick = (title, index) => {
    setActiveIndex(index);
    const slug = title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
    router.push(`/jobs/category/${slug}`);
  };

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Popular category
          </h2>
          <button
            onClick={() => router.push("/jobs")}
            className="text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
            View All <span className="ml-1">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8">
          {categories.map((cat, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onClick={() => handleCategoryClick(cat.title, idx)}
                role="button"
                aria-label={`${cat.title} category`}
                className={`cursor-pointer flex items-start gap-3 p-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xl"
                    : "bg-gray-100 text-gray-800 hover:shadow-md hover:bg-gray-200"
                }`}
              >
                <div
                  className={`p-2 rounded-md ${
                    isActive
                      ? "bg-white bg-opacity-20"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{cat.title}</h4>
                  <p className="text-xs">
                    {cat.positions} Open position
                    {cat.positions > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
