import { FC } from "react";
import { useParams } from "react-router-dom";

import { useGetEventFromPath } from "@hooks/database/fetchEvent";

const EventPeople: FC = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);

  return (
    <>
      <h1>{event?.name} People</h1>
    </>
  );
};

export default EventPeople;
