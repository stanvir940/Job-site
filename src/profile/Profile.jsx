import { useState } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    teamName: "",
    technology: "",
    type: "software", // Default to software
    time: "",
    description: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to your backend
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data submitted successfully!");
        setFormData({
          projectTitle: "",
          teamName: "",
          technology: "",
          type: "software",
          time: "",
          description: "",
        });
      } else {
        console.error("Submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-[#8D9EC6] bg-blend-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700 ">
        Project Data Entry
      </h1>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" text-white font-bold py-2 px-4 rounded"
      >
        Slide in from Right with Framer Motion!
      </motion.div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Title */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="projectTitle"
          >
            Project Title
          </label>
          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-md"
            placeholder="Enter project title"
            required
          />
        </div>

        {/* Team Name */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="teamName"
          >
            Team Name
          </label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            placeholder="Enter team name"
            required
          />
        </div>

        {/* Technology */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="technology"
          >
            Technology
          </label>
          <input
            type="text"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            placeholder="Enter technology stack"
            required
          />
        </div>

        {/* Type: Software or Hardware */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="type"
          >
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="software">Software</option>
            <option value="hardware">Hardware</option>
          </select>
        </div>

        {/* Time (Duration) */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Time (Duration)
          </label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            placeholder="Enter duration (e.g., 3 months)"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            placeholder="Enter project description"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className=" animate-bounce bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
