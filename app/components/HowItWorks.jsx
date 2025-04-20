"use client";
import {
  faCheckCircle,
  faSearch,
  faUpload,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const HowItWorks = () => {
  const router = useRouter();

  const steps = [
    {
      icon: faUserPlus,
      title: "Create account",
      description:
        "Sign up quickly with your email and start building your professional profile.",
    },
    {
      icon: faUpload,
      title: "Upload CV/Resume",
      description:
        "Easily upload your latest resume so employers can discover your talent.",
    },
    {
      icon: faSearch,
      title: "Find suitable job",
      description:
        "Browse jobs tailored to your skills, interests, and preferred location.",
    },
    {
      icon: faCheckCircle,
      title: "Apply job",
      description:
        "Submit applications directly and track your progress in one place.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          How jobpilot works
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-md"
            >
              <div
                className="w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl shadow-md"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                <FontAwesomeIcon icon={step.icon} />
              </div>

              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-white border border-blue-600 text-blue-600 w-6 h-6 text-sm rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <h3 className="text-lg font-medium mt-4">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{step.description}</p>
            </div>
          ))}

          {/* Desktop dotted line connector */}
          <div className="hidden md:block absolute top-[36px] left-20 right-20 h-0.5 border-t-2 border-dashed border-blue-400 z-[-1]"></div>
        </div>

        {/* Mobile line connector */}
        <div className="md:hidden flex flex-col items-center mt-8 space-y-2">
          {steps.slice(1).map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-6 bg-blue-300 border-dashed border-l-2"
            ></div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="mt-10">
          <button
            onClick={() => router.push("/register")} // Change to your signup route
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
