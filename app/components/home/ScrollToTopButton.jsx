"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Track the scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all"
        aria-label="Back to top"
      >
        <FaArrowUp className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
