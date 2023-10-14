import { eventsMockData } from "@data/events";

export default () => {
  return eventsMockData.map(({ path, name }) => ({
    path,
    name,
  }));
};
