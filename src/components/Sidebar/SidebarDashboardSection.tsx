import { FC } from "react";
import { LuGauge } from "react-icons/lu";
import SidebarEntry from "./SidebarEntry";

const SidebarDashboardSection: FC = () => {
    return (
        <li>
            <SidebarEntry
                title="Dashboard"
                path="/dashboard"
                color="rgb(148 163 184)"
                Icon={LuGauge}
            />
        </li>
    );
};

export default SidebarDashboardSection;
