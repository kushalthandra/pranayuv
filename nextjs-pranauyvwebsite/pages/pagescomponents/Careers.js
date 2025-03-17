import React from "react";

const Careers = () => {
  return (
    <div className="bg-[#ccd8e9] pt-24 py-16 px-6 min-h-screen pb-25">
      <h1 className="text-4xl font-bold text-center mb-6">Careers</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Why Work With Us?</h2>
        <p className="mt-2 text-gray-700">
          We are a company that develops IoT products, projects, research papers, and websites. Our team is made up of dedicated professionals in both R&D and IT departments, working collaboratively to drive innovation.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Our Departments</h2>
        <div className="mt-4">
          <h3 className="text-xl font-medium">R&D Department</h3>
          <p className="text-gray-700">
            Our R&D team focuses on product design, circuit design, PCB design, BOM creation, assembly, and prototype testing. We also conduct research projects and write technical papers to advance industry knowledge.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-medium">IT Department</h3>
          <p className="text-gray-700">
            The IT team specializes in creating websites, developing apps, training AI models, and much more. Our focus is on building cutting-edge digital solutions that enhance user experience and efficiency.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;