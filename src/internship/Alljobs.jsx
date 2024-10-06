import JobDisplay from "./jobdisplay/JobDisplay";
import Slidebar from "./slidebar/Slidebar";

const Alljobs = () => {
  return (
    <div>
      <h1>All Jobs</h1>
      <div className="flex flex-row items-center justify-center space-x-4">
        <div>
          <Slidebar></Slidebar>{" "}
        </div>
        <div>
          <JobDisplay></JobDisplay>{" "}
        </div>
      </div>
    </div>
  );
};

export default Alljobs;
