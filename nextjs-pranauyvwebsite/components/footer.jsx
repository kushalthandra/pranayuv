"use client"; // Required for usePathname to work

import { useState } from "react";
import { usePathname } from "next/navigation"; // App Router hook
import { MdContactPhone } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabaseUrl = "https://ekwdhimbdfmudviunyue.supabase.co";
const supabaseKey = "your_supabase_key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Footer() {
  const pathname = usePathname();

  // ❌ Hide footer on /contact route
  if (pathname === "/pagescomponents/contact") return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("contact_form").insert([formData]);

      if (error) {
        console.error("Error inserting data:", error);
        alert(`Error: ${error.message}`);
        return;
      }

      setFormData({ name: "", email: "", phone: "", query: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
      console.error("Unexpected error:", error.message);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-wide">Pranayuv</h2>
          <p className="text-gray-400 text-sm">
            At Pranayuv, we believe in thoughtful innovation that improves lives. Get in touch using the form to the right.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition text-xl">
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-6 text-gray-400 text-sm">
            <p>123 Innovation Street</p>
            <p>Tech City, 45678</p>
            <p>Country</p>
          </div>

          <div className="text-sm text-gray-500 mt-8">
            © {new Date().getFullYear()} Pranayuv. All rights reserved.
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
            <textarea name="query" placeholder="Your Message" value={formData.query} onChange={handleChange} required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 h-28 resize-none"></textarea>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded text-white font-semibold flex items-center justify-center gap-2">
              Submit <MdContactPhone className="text-lg" />
            </button>

            {success && <div className="text-green-400 text-sm text-center mt-2">✅ Successfully submitted!</div>}
          </form>
        </div>
      </div>
    </footer>
  );
}
