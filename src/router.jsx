import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Characters from "./pages/Characters";
import Titans from "./pages/Titans";
import Organizations from "./pages/Organizations";
import SingleCharacter from "./pages/SingleCharacter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about/",
        element: <AboutPage />,
      },
      {
        path: "/characters/",
        element: <Characters />,
      },
      {
        path: "/titans/",
        element: <Titans />,
      },
      {
        path: "/organizations",
        element: <Organizations />,
      },
      {
        path: 'characters/:id', // the : tells react that what follows is a variable
        element: <SingleCharacter />
      }

      //   make child for page not found
      //  path: "*",
      // element <NotFoundPage />
    ],
    // errorElement: <ErrorPage />
  },
]);

export default router;
