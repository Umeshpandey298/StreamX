import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import ExplorePage from "../pages/explorePage";
import SearchPage from "../pages/searchPage";
import DetailsPage from "../pages/detailsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default Router;
