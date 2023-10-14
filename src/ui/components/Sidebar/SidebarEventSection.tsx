import { FC } from "react";
import { LuCalendarDays } from "react-icons/lu";

import { useGetAllEvents } from "@hooks/database/fetchEvent";

import SidebarEntry from "./SidebarEntry";

/*
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@gql/gql";
*/

/*
const getAllEventsDocument = graphql(`
  query getAllEvents {
    events {
      id
      name
    }
  }
`);
*/

const SidebarEventSection: FC = () => {
  /*
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: async () =>
      request("http://localhost:8000/graphql", getAllEventsDocument),
  });
  */

  const allEvents = useGetAllEvents();

  return (
    <li>
      <SidebarEntry
        title="Events"
        path="event"
        color="rgb(148 163 184)"
        Icon={LuCalendarDays}
      />
      <ul>
        {allEvents.map((event, index) => {
          if (!event) return;

          return (
            <li key={index}>
              <SidebarEntry
                title={event.name}
                path={"event/" + event.path}
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
