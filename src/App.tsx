import { FC } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@components/Sidebar";

const App: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-grow">
      <Sidebar />
      <main className="flex-grow bg-slate-100 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
