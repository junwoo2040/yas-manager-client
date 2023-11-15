export enum TaskStatus {
  TODO,
  ASSIGNED,
  INPROGRESS,
  DONE,
}

export type TaskData = {
  id: string;
  eventId?: string;
  name: string;
  status: TaskStatus;
  description?: string;
  assigneeIds: string[];
};

export const tasksMockData: TaskData[] = [
  {
    id: "1",
    eventId: "1",
    name: "abcd",
    status: TaskStatus.TODO,
    description: "do this",
    assigneeIds: ["1"],
  },
  {
    id: "2",
    eventId: "1",
    name: "task",
    status: TaskStatus.INPROGRESS,
    assigneeIds: [],
  },
  {
    id: "3",
    name: "a",
    status: TaskStatus.DONE,
    assigneeIds: [],
  },
];
