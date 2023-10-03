import { FC } from "react";
import SidebarEntry from "./SidebarEntry";
import { LuCheckSquare } from "react-icons/lu";

const SidebarTaskSection: FC = () => {
  return (
    <li>
      <SidebarEntry
        title="Tasks"
        path="tasks"
        color="rgb(148 163 184)"
        Icon={LuCheckSquare}
      />
    </li>
  );
};

export default SidebarTaskSection;
