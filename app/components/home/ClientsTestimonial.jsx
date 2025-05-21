"use client";

import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "This platform helped me land a full-time accounting job within weeks of graduating. The job alerts and filters made my search super easy!",
    name: "Olanti Fikru",
    title: "Accountant, Addis Ababa",
    image: "/images/Olanti.png",
  },
  {
    id: 2,
    rating: 4.5,
    text: "I posted a job opening for my startup and found a talented developer in just 3 days. The hiring process was smooth and efficient.",
    name: "Timothy Paul",
    title: "Startup Founder, Hawassa",
    image: "/images/Timothy.png",
  },
  {
    id: 3,
    rating: 4,
    text: "After uploading my resume and completing my profile, I started getting interview invites. I found my current developer role through this site!",
    name: "Medina Ahmed",
    title: "Mobile Developer, Haramaya",
    image: "/images/Medina.png",
  },
  {
    id: 4,
    rating: 4.5,
    text: "As a student, I used this portal to find freelance writing jobs that fit my schedule. It gave me a reliable source of income during school.",
    name: "Abduladif Mohammed",
    title: "Content Writer, Addis Ababa",
    image: "/images/Abduladif.png",
  },
  {
    id: 5,
    rating: 5,
    text: "This job portal helped me turn my freelance gigs into a full-time career. I now work with clients nationwide as a remote graphic designer.",
    name: "Biniyam Iyasu",
    title: "Graphic Designer, Dire Dawa",
    image: "/images/Biniyam.png",
  },
];

const ClientsTestimonial = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoplay = () => {
    intervalRef.current = setInterval(nextSlide, 9000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 text-yellow-500" />);
    }

    if (halfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 text-yellow-500" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Clients Testimonial
        </h2>
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          {...handlers}
        >
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full flex-shrink-0 flex flex-col items-center text-center"
              >
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic text-base md:text-lg mb-4 max-w-xl">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mr-3 border-2 border-blue-500">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-avatar.png";
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonial;
