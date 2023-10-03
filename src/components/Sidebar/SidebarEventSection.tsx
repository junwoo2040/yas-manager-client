import { FC } from "react";
import SidebarEntry from "./SidebarEntry";
import { LuCalendarDays } from "react-icons/lu";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@src/gql/gql";
import { nameToLink } from "@src/utils/parser";

const getAllEventsDocument = graphql(`
    query getAllEvents {
        events {
            id
            name
        }
    }
`);

const SidebarEventSection: FC = () => {
    const { data } = useQuery({
        queryKey: ["events"],
        queryFn: async () =>
            request("http://localhost:8000/graphql", getAllEventsDocument),
    });

    return (
        <li>
            <SidebarEntry
                title="Events"
                path="events"
                color="rgb(148 163 184)"
                Icon={LuCalendarDays}
            />
            <ul>
                {data?.events?.map((event, index) => {
                    if (!event) return;

                    return (
                        <li key={index}>
                            <SidebarEntry
                                title={event.name}
                                // path={"events/" + nameToLink(event.name)}
                                path={"events/" + event.id}
                                color="rgb(203 213 225)"
                            />
                        </li>
                    );
                })}
            </ul>
        </li>
    );
};

export default SidebarEventSection;
