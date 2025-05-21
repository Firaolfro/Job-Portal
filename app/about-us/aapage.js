"use client";

export default function AboutUsPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <p className="text-gray-600 text-lg">
        Welcome to JobPilot! We’re a mission-driven company focused on
        empowering job seekers and employers through seamless digital tools and
        meaningful connections.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-600">
          We aim to bridge the gap between talent and opportunity, ensuring
          everyone has access to meaningful work.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-600">
          To become the most trusted employment and talent platform in Africa
          and beyond.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Team</h2>
        <p className="text-gray-600">
          We’re a team of passionate developers, designers, and career advocates
          working to improve job access and employment support through
          technology.
        </p>
      </section>
    </div>
  );
}
