import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppShellPage from "@pages/AppShell.page";
import LoginPage from "@pages/Login.page";
import RequestPage from "@pages/Request.page";

import DashboardLayout from "@layouts/Dashboard.layout";
import EventsLayout from "@layouts/Events.layout";
import EventLayout from "@layouts/Event.layout";
import EventPlanLayout from "@layouts/EventPlan.layout";
import EventTasksLayout from "@layouts/EventTasks.layout";
import EventRecordsLayout from "@layouts/EventRecords.layout";
import EventPeopleLayout from "@layouts/EventPeople.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShellPage />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "event",
        children: [
          {
            path: "",
            element: <EventsLayout />,
          },
          {
            path: ":eventPath",
            children: [
              {
                path: "",
                element: <EventLayout />,
              },
              {
                path: "plan",
                element: <EventPlanLayout />,
              },
              {
                path: "tasks",
                element: <EventTasksLayout />,
              },
              {
                path: "records",
                element: <EventRecordsLayout />,
              },
              {
                path: "people",
                element: <EventPeopleLayout />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/request",
    element: <RequestPage />,
  },
]);

const queryClient = new QueryClient();

const Wrapper: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default Wrapper;
