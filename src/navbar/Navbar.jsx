import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex px-5 py-2 bg-[#3F8EFC] text-black">
      <div className="navbar bg-[#3F8EFC]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/internships"}>Internships</Link>
              </li>
              <li>{user?.email ? <Link to={"/myjobs"}>My Jobs</Link> : ""}</li>
              <li>
                {user?.email ? <Link to={"/messages"}>Message</Link> : ""}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/internships"}>Internships</Link>
            </li>
            <li>{user?.email ? <Link to={"/myjobs"}>My Jobs</Link> : ""}</li>
            <li>{user?.email ? <Link to={"/messages"}>Message</Link> : ""}</li>
          </ul>
        </div>
      </div>
      <div className="dropdown dropdown-end text-white">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user?.email ? (
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            ) : (
              <img src="" alt="Image" />
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to={"/profile"} className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to={"/form"}>Settings</Link>
          </li>
          <li>
            {/* <Link to={"/logout"}>Logout</Link> */}
            {user?.email ? (
              <>
                {" "}
                <button onClick={handleLogout}>Sign out</button>
              </>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
