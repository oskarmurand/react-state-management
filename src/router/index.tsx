

import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { LocalStatePage } from "../pages/localState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/local-state",
    element: <LocalStatePage />,
  },
]);

export default router;
