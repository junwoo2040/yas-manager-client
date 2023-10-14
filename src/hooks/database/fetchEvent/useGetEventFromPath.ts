import { eventsMockData } from "@data/events";

export default (eventPath: string | undefined) => {
  return eventsMockData.find((event) => event.path === eventPath);
};
