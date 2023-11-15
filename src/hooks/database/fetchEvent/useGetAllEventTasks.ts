import { tasksMockData } from "@data/tasks";

export default (eventId: string | undefined) => {
  return tasksMockData.filter((task) => task.eventId === eventId);
};
