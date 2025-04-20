import FeaturedJobs from "./components/FeaturedJobs";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import MostPopularVacancies from "./components/MostPopularVacancies";

import PopularCategories from "./components/PopularCategories";

import StatisticsLayout from "./components/StatisticsLayout";

import CallToAction from "./components/CallToAction";
import Testimonials from "./components/ClientsTestimonial";
import HowItWorks from "./components/HowItWorks";
import TopCompanies from "./components/TopCompanies";

import ScrollToTopButton from "./components/ScrollToTopButton";
export default function HomePage() {
  return (
    <div>
      {/* <Header /> */}

      <ScrollToTopButton />
      <Hero />
      <StatisticsLayout />
      <MostPopularVacancies />
      <HowItWorks />
      <PopularCategories />

      <FeaturedJobs />
      <TopCompanies />
      <Testimonials />
      <CallToAction />

      <Footer />
    </div>
  );
}
