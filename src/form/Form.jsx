import { useState } from "react";

const Form = ({ formFields = [], onSubmit }) => {
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    formFields.forEach((field) => {
      initialData[field.name] = "";
    });
    return initialData;
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white text-gray-700 min-h-screen p-10 space-y-4">
      <div className="w-full text-center text-5xl font-bold text-cyan-500 my-4">
        <h1>Dynamic Input Form</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <label
            key={index}
            className="input input-bordered flex items-center gap-2 bg-gray-50 mb-4"
          >
            {field.icon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d={field.iconPath} />
              </svg>
            )}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="grow"
              placeholder={field.placeholder}
            />
          </label>
        ))}
        <div className="w-full text-center">
          <button type="submit" className="btn btn-primary text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
