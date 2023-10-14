import { recordsMockData } from "@data/records";

export default (eventId: string | undefined) => {
  return recordsMockData.filter((record) => record.eventId === eventId);
};
