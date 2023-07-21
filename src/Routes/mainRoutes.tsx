import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../Components/Common/FirstLayout";
import LandingPage from "../Pages/Auth/LandingPage";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";
import SignLayout from "../Components/Common/signLayout";
import HomeScreen from "../Pages/Home/HomeScreen";
import HomeLayout from "../Components/Common/HomeLayout";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        path: "/",
      },
    ],
  },
  {
    path: "/auth",
    element: <SignLayout />,
    children: [
      {
        element: <SignIn />,
        path: "/auth/signIn",
      },
      {
        path: "/auth/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <HomeLayout/>,
    path: "/home",
    children: [
        {
            index: true,
            element: <HomeScreen/>,
            path: "/home"
        }
    ]
  }
]);
