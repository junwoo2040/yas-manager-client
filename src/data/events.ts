export type EventData = {
  id: string;
  path: string;
  name: string;
  start: Date;
  end: Date;
  location?: string;
  description?: string;
};

export const eventsMockData: EventData[] = [
  {
    id: "1",
    path: "event-1",
    name: "Event 1",
    start: new Date("2023-10-15T00:00:00"),
    end: new Date("2023-10-15T00:00:00"),
    location: "ISY",
    description: "Description",
  },
  {
    id: "2",
    path: "movie-night-1",
    name: "Move Night",
    start: new Date("2023-10-20T00:00:00"),
    end: new Date("2023-10-20T00:00:00"),
    location: "ISY",
    description: "Movie Night #1",
  },
  {
    id: "3",
    path: "movie-night-2",
    name: "Move Night",
    start: new Date("2023-11-05T00:00:00"),
    end: new Date("2023-11-05T00:00:00"),
    location: "ISY",
    description: "Movie Night #2",
  },
  {
    id: "4",
    path: "international-day",
    name: "International Day",
    start: new Date("2023-11-16T00:00:00"),
    end: new Date("2023-11-16T00:00:00"),
    location: "ISY",
    description: "International day booths & merch sales",
  },
];
