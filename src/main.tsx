import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.tsx";

import Dashboard from "@pages/Dashboard.tsx";
import Events from "@pages/Events.tsx";
import Merch from "@pages/Merch.tsx";
import Login from "@pages/auth/Login.page.tsx";
import Request from "@pages/auth/Request.page.tsx";
import Database from "@pages/Database.tsx";
import Finance from "@pages/Finance.tsx";
import Statistics from "@pages/Statistics.tsx";
import Settings from "@pages/Settings.tsx";
import Tasks from "@pages/Tasks.tsx";
import Shifts from "@pages/Shifts.tsx";

import Event from "./layouts/Event.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "events",
        children: [
          {
            path: "",
            element: <Events />,
          },
          {
            path: ":eventId",
            children: [
              {
                path: "",
                element: <Event />,
              },
              {
                path: "tasks",
                element: <Tasks />,
              },
              {
                path: "shifts",
                element: <Shifts />,
              },
              {
                path: "finance",
                element: <Finance />,
              },
              {
                path: "statistics",
                element: <Statistics />,
              },
            ],
          },
        ],
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "database",
        element: <Database />,
        children: [
          {
            path: "finance",
            element: <Finance />,
          },
          {
            path: "merch",
            element: <Merch />,
          },
          {
            path: "statistics",
            element: <Statistics />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/request",
    element: <Request />,
  },
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
