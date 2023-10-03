import { FC } from "react";
import { LuSettings } from "react-icons/lu";
import SidebarEntry from "./SidebarEntry";

const SidebarSettingsSection: FC = () => {
  return (
    <li>
      <SidebarEntry
        title="Settings"
        path="settings"
        color="rgb(148 163 184)"
        Icon={LuSettings}
      />
    </li>
  );
};

export default SidebarSettingsSection;
