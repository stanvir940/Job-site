import axios from "axios";
import Form from "../form/Form";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const ResearchIn = () => {
  const formFields = [
    {
      name: "title",
      type: "text",
      placeholder: "Project Title",
      icon: true,
    },
    {
      name: "technology",
      type: "text",
      placeholder: "Technology Used",
      icon: true,
    },
    {
      name: "teamName",
      type: "text",
      placeholder: "Team name",
      icon: true,
    },
    {
      name: "type",
      type: "text",
      placeholder: "Types of the projects",
      icon: true,
    },
    {
      name: "time",
      type: "text",
      placeholder: "Time",
      icon: true,
    },
    {
      name: "partners",
      type: "text",
      placeholder: "Partners",
      icon: true,
    },
    {
      name: "description",
      type: "text",
      placeholder: "Description",
      icon: true,
    },
  ];

  const onSubmit = async (formData) => {
    const token = await auth.currentUser.getIdToken();

    try {
      const response = await axios
        .post(
          "http://localhost:5001/submit",
          {
            data: formData,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.error("Error:", error));

      Swal.fire({
        title: "Inserted!",
        text: "You clicked the button!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error::", error);
      // Swal.fire({
      //   title: "Failed!",
      //   text: "You clicked the button!",
      //   icon: "error",
      // });
    }
  };
  return (
    <div>
      <Form formFields={formFields} onSubmit={onSubmit} />
    </div>
  );
};

export default ResearchIn;
