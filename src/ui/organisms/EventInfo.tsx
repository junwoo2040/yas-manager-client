import { useGetEventFromPath } from "@hooks/database/fetchEvent";
import { FC } from "react";
import { useParams } from "react-router-dom";

const EventInfo: FC = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);

  return (
    <div>
      <h1>{event?.name}</h1>
      <p>
        <b>Date:</b> {event?.start.toDateString()}
      </p>
      <p>
        <b>Start:</b> {event?.start.toTimeString()}
      </p>
      <p>
        <b>End:</b> {event?.end.toTimeString()}
      </p>
      <p>
        <b>Location:</b> {event?.location}
      </p>
      <p>
        <b>Description:</b> {event?.description}
      </p>
    </div>
  );
};

export default EventInfo;
