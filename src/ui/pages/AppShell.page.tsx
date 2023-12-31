import { FC } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@organisms/Sidebar";
import Navigation from "@organisms/Navigation";

const AppShellPage: FC = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-grow">
        <Sidebar />
        <main className="flex-grow bg-slate-100 p-4">
          <Navigation />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppShellPage;
