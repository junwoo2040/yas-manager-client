import SidebarHeader from "./SidebarHeader";
import SidebarDashboardSection from "./SidebarDashboardSection";
import SidebarEventSection from "./SidebarEventSection";
import SidebarDatabaseSection from "./SidebarDatabaseSection";
import SidebarSettingsSection from "./SidebarSettingsSection";
import SidebarTaskSection from "./SidebarTaskSection";

const Sidebar = () => {
  return (
    <nav>
      <div className="w-64 bg-slate-200">
        <SidebarHeader />
        <ul className="space-y-2">
          <SidebarDashboardSection />
          <SidebarEventSection />
          <SidebarDatabaseSection />
          <SidebarTaskSection />
          <SidebarSettingsSection />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
