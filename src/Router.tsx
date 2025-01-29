import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import NewFeedback from "./pages/NewFeedback";
// import EditFeedback from "./pages/EditFeedback";
import FeedbackDetail from "./pages/FeedbackDetail";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/new",
    element: <NewFeedback />,
  },
  // {
  //   path: "/edit",
  //   element: <EditFeedback />,
  // },
  {
    path: "/feedback/:feedback_id/comments",
    element: <FeedbackDetail />,
  },
]);
export default Router;
