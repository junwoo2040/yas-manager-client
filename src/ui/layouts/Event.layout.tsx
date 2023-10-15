import { FC } from "react";

import EventNavigationCards from "@organisms/EventNavigationCards";
import EventInfo from "@organisms/EventInfo";

const EventLayout: FC = () => {
  return (
    <>
      <EventInfo />
      <EventNavigationCards />
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
