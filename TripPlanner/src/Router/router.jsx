import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../Views/Login";
import BaseLayout from "../Views/BaseLayout";
import LandingPage from "../Views/HomePage";
import DestinationDetail from "../Views/Destination";
import MyItineraries from "../Views/Itineraries";
import SpesificItineraries from "../Views/Itineraries";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
          return redirect('/home')
      }
      return null
  },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
          return redirect('/login')
      }
      return null
  },
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/destination/:id",
        element: <DestinationDetail />,
      },
      {
        path: "/MyPlan",
        element: <MyItineraries />,
      },
      {
        path: "/MyPlan/:id",
        element: <SpesificItineraries />,
      },
    ],
  },
]);

export default router;
