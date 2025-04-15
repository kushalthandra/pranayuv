import React from "react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 pt-28">
      {/* Hero Section */}
      <section className="text-center px-6 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md shadow-lg rounded-2xl px-10 py-16 border border-blue-100">
          <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-4">
            Build the Future With Us
          </h1>
          <p className="text-gray-700 text-lg">
            Be part of a forward-thinking team redefining healthcare and smart tech through bold innovation and creativity.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-full font-medium transition duration-300">
            Browse Opportunities
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">

        {/* Why Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">Why Pranayuv?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovate with Impact",
                text: "Every solution we build directly improves lives. Your work won't just matter — it’ll make a difference."
              },
              {
                title: "Culture of Collaboration",
                text: "We value openness, curiosity, and feedback. Diverse minds coming together to create magic."
              },
              {
                title: "Grow Without Limits",
                text: "Upskill, publish, lead. From research papers to real-world deployments — your journey is yours to shape."
              }
            ].map(({ title, text }, i) => (
              <div
                key={i}
                className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
            Explore Our Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Research & Development</h3>
              <p className="text-gray-700 text-sm">
                Dive deep into circuit design, prototyping, BOMs, and testing. Our R&D team shapes the future
                through rigorous research and hands-on experimentation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Information Technology</h3>
              <p className="text-gray-700 text-sm">
                Build seamless apps, architect cloud platforms, and train AI models. This team powers innovation across
                everything we build.
              </p>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="bg-white p-10 rounded-xl shadow-sm mb-24 border border-gray-100">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Perks & Benefits</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm list-disc pl-6">
            <li>Remote-friendly work culture</li>
            <li>Performance bonuses & recognition</li>
            <li>Flexible hours & wellness days</li>
            <li>Team retreats & creative sprints</li>
            <li>Publication & IP support</li>
            <li>Dedicated mentorship & workshops</li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Let’s Build Tomorrow</h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto mb-6">
            Explore roles or send us your portfolio. We're always looking for passionate innovators to join the journey.
          </p>
          <button className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-full font-medium transition duration-300">
            Join the Team
          </button>
        </section>
      </div>
    </div>
  );
};

export default Careers;
