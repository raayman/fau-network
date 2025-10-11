import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ProfilePage from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "events/:eventId",
        element: <EventDetailPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
