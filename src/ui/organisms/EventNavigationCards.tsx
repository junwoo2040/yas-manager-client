import { FC } from "react";

import NavigationCard from "@molecules/NavigationCard";

const EventNavigationCards: FC = () => {
  return (
    <div>
      <NavigationCard name={"Plan"} path={"plan"} />
      <NavigationCard name={"Tasks"} path={"tasks"} />
      <NavigationCard name={"Records"} path={"records"} />
      <NavigationCard name={"People"} path={"people"} />
    </div>
  );
};

export default EventNavigationCards;
