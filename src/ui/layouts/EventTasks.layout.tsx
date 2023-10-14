import { useGetEventFromPath } from "@hooks/database/fetchEvent";
import { FC } from "react";
import { useParams } from "react-router-dom";

const EventTasks: FC = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);

  return (
    <>
      <h1>{event?.name} Tasks</h1>
    </>
  );
};

export default EventTasks;
