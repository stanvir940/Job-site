import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="w-full mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
