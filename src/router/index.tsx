import { createBrowserRouter } from "react-router-dom";
import LocalStatePage from "../pages/LocalState";
import Layout from "../pages/Layout";
import Context from "../pages/Context";
import Reducer from "../pages/Reducer";
import ReduxPage from "../pages/ReduxPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <>Homepage</>,
      },
      {
        path: "/local-state",
        element: <LocalStatePage />,
      },
      {
        path: "/context",
        element: <Context />,
      },
      {
        path: "/reducer",
        element: <Reducer />,
      },
      {
        path: '/redux',
        element: <ReduxPage />
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

export default router;
