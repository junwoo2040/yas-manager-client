import { FC } from "react";
import { useParams } from "react-router-dom";

import EventRecordsTable from "@organisms/EventRecordsTable";

import { useGetEventFromPath } from "@hooks/database/fetchEvent";

const EventRecords: FC = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);

  return (
    <>
      <h1>{event?.name} Records</h1>
      <EventRecordsTable />
    </>
  );
};

export default EventRecords;
