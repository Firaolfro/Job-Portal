import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";

const AboutPage = () => {
  return (
    <main className="bg-gray-50">
      <PageHeader />
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <WhoWeAreSection />
        <PartnerShowcase />
        <GallerySection />
        <MissionStatement />
        <TestimonialSection />
        <RegistrationCards />
      </div>
    </main>
  );
};

const PageHeader = () => {
  return (
    <header className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-medium">About</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>Home</li>
            <li>/</li>
            <li>About</li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

const WhoWeAreSection = () => {
  const stats = [
    { icon: <TfiBag />, value: "1,75,342", label: "Live Jobs" },
    { icon: <HiOutlineBuildingOffice2 />, value: "97,354", label: "Companies" },
    { icon: <IoPeopleOutline />, value: "38,47,154", label: "Candidates" },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-30 items-center">
        <div className="w-[600px]">
          <span className="text-blue-600 font-medium">Who we are</span>
          <h2 className="text-2xl font-medium mt-2 mb-6">
            We're highly skilled and professionals team.
          </h2>
          <p className="text-gray-600 text-sm">
            Praesent non Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente cum earum consequuntur dolor possimus reprehenderit
            at unde Cupiditate earum temporibus assumenda.
          </p>
        </div>
        <div className="lg:w-1/2 ">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="p-3 bg-blue-100  text-blue-600">{icon}</div>
      <div>
        <p className="text-base text-gray-500">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
};

const PartnerShowcase = () => {
  const partners = [
    { logo: "/logos/ethiotelecom.png", alt: "Ethio Telecom" },
    { logo: "/logos/ethiotelecom.png", alt: "Ethio Telecom" },
    { logo: "/logos/ethiotelecom.png", alt: "Ethio Telecom" },
    { logo: "/logos/ethiotelecom.png", alt: "Ethio Telecom" },
    { logo: "/logos/ethiotelecom.png", alt: "Ethio Telecom" },
    // { logo: "/logos/google.png", alt: "Google" },
    // { logo: "/logos/safaricom.png", alt: "Safaricom" },
    // { logo: "/logos/AwashBank.png", alt: "Awash Bank" },
    // { logo: "/logos/apple.png", alt: "Apple" },
  ];

  return (
    <section className="max-w-7xl mx-auto mb-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} logo={partner.logo} alt={partner.alt} />
        ))}
      </div>
    </section>
  );
};

const PartnerLogo = ({ logo, alt }) => {
  return (
    <div className="flex items-center justify-center h-16 w-32 relative">
      <Image
        src={logo}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100px, 150px"
      />
    </div>
  );
};

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/images/placeholder.png",
      alt: "Our team working together",
      className: "row-span-2",
    },
    {
      src: "/images/placeholder.png",
      alt: "Office workspace",
    },
    {
      src: "/images/placeholder.png",
      alt: "Team meeting",
      className: "row-span-2",
    },
    {
      src: "/images/placeholder.png",
      alt: "Company event",
    },
  ];

  return (
    <section className="w-[1024px]">
      <div className="grid grid-cols-3 gap-4 h-[600px]">
        <div className="relative row-span-2 rounded-lg overflow-hidden">
          <Image
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="relative row-span-2 rounded-lg overflow-hidden">
          <Image
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

const MissionStatement = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-[600px]">
          <span className="text-blue-600 font-medium">Our mission</span>
          <h2 className="text-2xl font-medium mt-2 mb-6">
            Our mission is to help people find the perfect job.
          </h2>
          <p className="text-gray-600 text-sm">
            Praesent non Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente cum earum consequuntur dolor possimus reprehenderit
            at unde Cupiditate earum temporibus assumenda.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="relative aspect-square">
            <Image
              src="/images/ourmission.png"
              alt="Our mission illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/placeholder.png"
              alt="Testimonial"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-medium">Testimonial</span>
          <h2 className="text-2xl font-bold mt-3 mb-8">What Our People Says</h2>
          <div className="space-y-6">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit odio molestiae neque, ducimus dolorem cupiditate at
              delectus cumque in corporis laboriosam nobis sed, excepturi,
              minima ipsam deleniti dicta nulla unde.
            </blockquote>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-bold">Someone</p>
              <p className="text-gray-600">Have Job</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RegistrationCards = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RegistrationCard
          title="Become a Candidate"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium explicabo, animi provident voluptatem ab quia nostrum unde sed, nesciunt voluptas."
          buttonText="Register Now"
          variant="light"
        />
        <RegistrationCard
          title="Become an Employer"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium explicabo, animi provident voluptatem ab quia nostrum unde sed, nesciunt voluptas."
          buttonText="Register Now"
          variant="dark"
        />
      </div>
    </section>
  );
};

const RegistrationCard = ({ title, description, buttonText, variant }) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`p-8 rounded-lg ${
        isDark ? "bg-blue-600 text-white" : "bg-gray-200"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className={`mb-6 ${isDark ? "text-blue-100" : "text-gray-700"}`}>
        {description}
      </p>
      <button
        className={`px-6 py-2 rounded-md font-medium ${
          isDark ? "bg-white text-blue-600" : "bg-blue-600 text-white"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AboutPage;
