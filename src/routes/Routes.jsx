import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Myjob from "../myjobs/Myjob";
import Message from "../messages/Message";
import Alljobs from "../internship/Alljobs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myjobs",
        element: <Myjob></Myjob>,
      },
      {
        path: "/messages",
        element: <Message></Message>,
      },
      {
        path: "/internships",
        element: <Alljobs></Alljobs>,
      },
    ],
  },
]);

export default Routes;
