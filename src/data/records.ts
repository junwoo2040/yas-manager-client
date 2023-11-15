export enum RecordType {
  MERCH,
  PAYMENT,
  DONATION,
}

export type RecordData = {
  id: string;
  eventId?: string;
  type: RecordType;
  author: {
    id: string;
    fullName: string;
  };
  date: Date;
  check: number;
};

export const recordsMockData: RecordData[] = [
  {
    id: "1",
    type: RecordType.MERCH,
    author: {
      id: "1",
      fullName: "Jun Woo Baek",
    },
    date: new Date("2023-10-3"),
    check: 1,
  },
  {
    id: "2",
    eventId: "1",
    type: RecordType.PAYMENT,
    author: {
      id: "1",
      fullName: "Jun Woo Baek",
    },
    date: new Date("2023-10-9"),
    check: -2,
  },
  {
    id: "3",
    eventId: "1",
    type: RecordType.DONATION,
    author: {
      id: "1",
      fullName: "Jun Woo Baek",
    },
    date: new Date("2023-10-10"),
    check: 1,
  },
];
