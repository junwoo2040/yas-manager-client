import { FC } from "react";
import { LuGauge } from "react-icons/lu";

import SidebarEntry from "@atoms/SidebarEntry";
import SidebarEventSection from "@molecules/SidebarEventsSection";
import SidebarHeader from "@molecules/SidebarHeader";

const Sidebar: FC = () => {
  return (
    <nav className="w-64 bg-slate-200">
      <SidebarHeader />
      <ul className="space-y-2">
        <SidebarEntry
          title="Dashboard"
          path="/dashboard"
          color="rgb(148 163 184)"
          Icon={LuGauge}
        />
        <SidebarEventSection />
      </ul>
    </nav>
  );
};

export default Sidebar;
