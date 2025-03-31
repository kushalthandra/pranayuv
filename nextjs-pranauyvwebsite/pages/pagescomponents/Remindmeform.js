import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = 'https://krttladugepkfkwytzpp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtydHRsYWR1Z2Vwa2Zrd3l0enBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3Mzc2OTksImV4cCI6MjA1NjMxMzY5OX0.oUNn3a0V4GlnyNQVbhlZoSCxaHxQ2mWG8VJ-fwC0nnk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product_name: "RENCHAGE R0 AI-based Water Bottle", // Default selection
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert data into the Supabase table
      const { data, error } = await supabase
        .from("remind_me_form")
        .insert([formData]);

      if (error) {
        throw error;
      }

      console.log("Data inserted successfully:", data);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        product_name: "RENCHAGE R0 AI-based Water Bottle", // Reset to default
      });
    } catch (error) {
      console.error("Error inserting data:", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Remainderbg.jpg')" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Contact Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          {/* Dropdown for Product Name */}
          <select
            name="product_name"
            onChange={handleChange}
            value={formData.product_name}
            required
            className="w-full p-2 border rounded bg-white"
          >
            <option value="RENCHAGE R0 AI-based Water Bottle">RENCHAGE R0 AI-based Water Bottle</option>
            <option value="Ayuv Hybrid Bed V1 Bed to Wheelchair Conversion Product">Ayuv Hybrid Bed V1 Bed to Wheelchair Conversion Product</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
