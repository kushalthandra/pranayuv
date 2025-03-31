import React from "react";

const Careers = () => {
  return (
    <div className="bg-gray-200 pt-24 py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center pt-7 text-gray-800 mb-10">
          Join Our Team 🚀
        </h1>

        {/* Why Work With Us */}
        <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Why Work With Us?</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At <span className="font-semibold">Pranayuv</span>, we are committed to building
            innovative IoT solutions, cutting-edge research papers, and high-quality web & app development.
            Join a team of passionate professionals working together to revolutionize technology.
          </p>
        </section>

        {/* Our Departments */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* R&D Department */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-900 flex items-center">
              🔬 R&D Department
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our Research & Development team focuses on product design, circuit and PCB layout, BOM creation,
              assembly, and prototype testing. We also contribute to research projects and publish technical papers.
            </p>
          </div>

          {/* IT Department */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-900 flex items-center">
              💻 IT Department
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our IT team specializes in website & app development, AI training, cloud solutions, and digital automation.
              We are at the forefront of technology, building seamless user experiences and next-gen solutions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
