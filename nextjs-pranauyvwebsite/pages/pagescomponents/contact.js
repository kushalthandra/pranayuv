import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://ekwdhimbdfmudviunyue.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrd2RoaW1iZGZtdWR2aXVueXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjY4MTMsImV4cCI6MjA2MDU0MjgxM30.FZIQ86fP42NGIpUUlE9gpp-iY_CErCaxei5UpV3XAY0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("contact_form")
        .insert([formData]);

      if (error) throw error;

      setMessage({ text: "✅ Your message has been sent!", type: "success" });
      setFormData({ name: "", email: "", phone: "", subject: "", query: "" });
    } catch (error) {
      setMessage({ text: "❌ Something went wrong. Try again later.", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage({ text: "", type: "" }), 4000);
    }
  };

  return (
    <div className="relative min-h-screen pt-7 mt-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-300 via-white to-blue-300 px-6 py-10 animate-gradient-move">
      {/* Floating Blobs */}
      <div className="absolute top-8 left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-fast"></div>

      {/* PRANAYUV Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <h1 className="text-8xl md:text-[16rem] font-extrabold text-indigo-200 opacity-40 animate-watermark">
  PRANAYUV
</h1>
      </div>

      {/* Form Card */}
      <div className="relative z-10 w-full opacity-70 max-w-3xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 transition-all duration-300 hover:scale-[1.01]">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-700 tracking-widest ">
             Contact Our Team
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Fill out the form below and we’ll get back to you shortly.
          </p>
        </div>

        {message.text && (
          <div
            className={`mb-6 p-3 rounded-lg text-sm font-medium ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Subject of your query"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows={5}
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
              placeholder="Describe your issue or feedback..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg ${
              loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
