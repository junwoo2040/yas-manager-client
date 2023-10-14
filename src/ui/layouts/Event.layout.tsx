import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { useGetEventFromPath } from "@hooks/database/fetchEvent";

const EventLayout: FC = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);

  return (
    <>
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
      <div>
        <Link to={"plan"}>
          <div>
            <h3>Plan</h3>
          </div>
        </Link>
        <Link to={"tasks"}>
          <div>
            <h3>Tasks</h3>
          </div>
        </Link>
        <Link to={"records"}>
          <div>
            <h3>Records</h3>
          </div>
        </Link>
        <Link to={"people"}>
          <div>
            <h3>People</h3>
          </div>
        </Link>
      </div>
      <div>
        <div>
          <h3>Quick Add</h3>
        </div>
        <div>
          <h3>Recent Activites</h3>
        </div>
        <div>
          <h3>Shift Schedule</h3>
        </div>
      </div>
    </>
  );
};

export default EventLayout;
