import { useEffect, useState } from "react";
import Internship from "./Internship";

const Internships = () => {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("/jsonData.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data.projects))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5001/researches")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="m-6">
      <div className=" space-y-4">
        {projects.map((data, idx) => (
          <Internship data={data} key={idx}></Internship>
        ))}
      </div>
    </div>
  );
};

export default Internships;
