import axios from "axios";
import Form from "../form/Form";
import Swal from "sweetalert2";

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
      name: "teamName",
      type: "text",
      placeholder: "Team name",
      icon: true,
      iconPath: "M2.5 3A1.5 1.5...",
    },
    {
      name: "type",
      type: "text",
      placeholder: "Types of the projects",
      icon: true,
      iconPath: "M2.5 3A1.5 1.5...",
    },
    {
      name: "time",
      type: "text",
      placeholder: "Time",
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
      type: "text",
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
        Swal.fire({
          title: "Inserted!",
          text: "You clicked the button!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Failed!",
        text: "You clicked the button!",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <Form formFields={formFields} onSubmit={onSubmit} />
    </div>
  );
};

export default ResearchIn;
