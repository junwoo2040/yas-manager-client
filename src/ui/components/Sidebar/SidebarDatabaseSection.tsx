import { FC } from "react";
import SidebarEntry from "./SidebarEntry";
import {
    LuDatabase,
    LuLineChart,
    LuPackage,
    LuPiggyBank,
} from "react-icons/lu";

const SidebarDatabaseSection: FC = () => {
    return (
        <li>
            <SidebarEntry
                title="Database"
                path="database"
                color="rgb(148 163 184)"
                Icon={LuDatabase}
            />
            <ul>
                <li>
                    <SidebarEntry
                        title="Finance"
                        path="database/finance"
                        color="rgb(203 213 225)"
                        Icon={LuPiggyBank}
                    />
                </li>
                <li>
                    <SidebarEntry
                        title="Merch"
                        path="database/merch"
                        color="rgb(203 213 225)"
                        Icon={LuPackage}
                    />
                </li>
                <li>
                    <SidebarEntry
                        title="Statistics"
                        path="database/statistics"
                        color="rgb(203 213 225)"
                        Icon={LuLineChart}
                    />
                </li>
            </ul>
        </li>
    );
};

export default SidebarDatabaseSection;
