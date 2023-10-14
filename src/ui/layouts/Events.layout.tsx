import { FC } from "react";

import EventsTable from "@components/EventsTable";

const EventsLayout: FC = () => {
  return (
    <>
      <h1>Events</h1>
      <EventsTable />
    </>
  );
};

export default EventsLayout;
