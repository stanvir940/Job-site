import axios from "axios";
import Form from "../form/Form";

const ResearchIn = () => {
  const formFields = [
    {
      name: "title",
      type: "text",
      placeholder: "Project Title",
      icon: true,
      iconPath: "M9.965 11.026...",
    },
    {
      name: "technology",
      type: "text",
      placeholder: "Technology Used",
      icon: true,
      iconPath: "M2.5 3A1.5 1.5...",
    },
    {
      name: "partners",
      type: "text",
      placeholder: "Partners",
      icon: true,
      iconPath: "M8 8a3 3 0 1 0 0-6...",
    },
    {
      name: "description",
      type: "password",
      placeholder: "Description",
      icon: true,
      iconPath: "M14 6a4 4...",
    },
  ];

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/submit",
        formData
      );
      if (response.status === 201) {
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed");
    }
  };
  return (
    <div>
      <Form formFields={formFields} onSubmit={onSubmit} />
    </div>
  );
};

export default ResearchIn;
