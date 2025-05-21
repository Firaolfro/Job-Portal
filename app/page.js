import FeaturedJobs from "./components/home/FeaturedJobs";
// import Header from "./components/Header";
import Hero from "./components/home/Hero";
import MostPopularVacancies from "./components/home/MostPopularVacancies";

import PopularCategories from "./components/home/PopularCategories";

import StatisticsLayout from "./components/home/StatisticsLayout";

import CallToAction from "./components/home/CallToAction";
import Testimonials from "./components/home/ClientsTestimonial";
import HowItWorks from "./components/home/HowItWorks";
import TopCompanies from "./components/home/TopCompanies";

import ScrollToTopButton from "./components/home/ScrollToTopButton";
import Header from "./components/layouts/Header";
export default function HomePage() {
  return (
    <div>
      <Header />

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

      {/* <Footer /> */}
    </div>
  );
}
