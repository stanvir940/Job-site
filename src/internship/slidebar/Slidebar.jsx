import { CiFilter } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

const Slidebar = () => {
  return (
    <div className=" m-6 space-y-4">
      <div className="rounded-lg shadow-lg border p-4 bg-gray-50 text-blue-600 font-bold">
        <div className="flex justify-center items-center space-x-2">
          <FaRegBell></FaRegBell>
          <h3>Save this search as alert</h3>
        </div>
      </div>
      <div className="shadow-lg bg-gray-50 rounded-lg p-6">
        <div className="text-black text-xl flex flex-row justify-center items-center space-x-2 px-8 py-6 font-semibold">
          <div className="text-blue-400">
            <CiFilter />
          </div>
          <h1 className="text-base">Filters</h1>
        </div>
        <div className="text-black space-y-2">
          <div className="space-y-2">
            <label htmlFor="profile">Profile</label>
            <input
              name="profile"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs input-sm bg-gray-50"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <input
              name="category"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-sm input-sm bg-gray-50"
            />
          </div>
          <div className="form-control ">
            <label className="label cursor-pointer">
              <span className="label-text text-black">Machine Learning</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary checkbox-sm"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label cursor-pointer">
              <span className="label-text text-black">Others</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary checkbox-sm"
              />
            </label>
          </div>

          {/* this will be implemented in future */}
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="text-blue-500 font-semibold m-1 bg-white"
              >
                View other filter options
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <a role="button" className="text-blue-500 font-semibold ">
              Clear
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
