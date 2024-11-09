import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import MediaCoverage from "./pages/MediaCoverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/media",
    element: <MediaCoverage />,
  },
]); 