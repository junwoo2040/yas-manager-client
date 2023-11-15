/* SidebarEventsSection.tsx */
import { FC } from "react";
import { LuCalendarDays } from "react-icons/lu";

import SidebarEntry from "@atoms/SidebarEntry";
import { useGetAllEventHeadersQuery } from "@src/graphql/generated";
import graphQLRequestClient from "@utils/clients/graphQLRequestClient";

const SidebarEventSection: FC = () => {
  const { data, isFetching } = useGetAllEventHeadersQuery(graphQLRequestClient);

  return (
    <li>
      <ul>
        <SidebarEntry
          title="Events"
          path="event"
          color="rgb(148 163 184)"
          Icon={LuCalendarDays}
        />
        {!isFetching ? (
          data?.events?.map((event, index) => {
            if (!event) return;

            return (
              <SidebarEntry
                key={index}
                title={event.name || ""}
                path={"event/" + event.path}
                color="rgb(203 213 225)"
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </li>
  );
};

export default SidebarEventSection;
