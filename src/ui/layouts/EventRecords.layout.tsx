import { FC } from "react";
import { useParams } from "react-router-dom";

import { useGetEventFromPath } from "@hooks/database/fetchEvent";
import EventRecordsTable from "@components/EventRecordsTable";

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
