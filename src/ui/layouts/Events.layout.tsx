import { FC } from "react";

import EventsTable from "@organisms/EventsTable";

const EventsLayout: FC = () => {
  return (
    <>
      <h1>Events</h1>
      <EventsTable />
    </>
  );
};

export default EventsLayout;
