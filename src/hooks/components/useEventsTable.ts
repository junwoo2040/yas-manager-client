import { useGetAllEvents } from "@hooks/database/fetchEvent";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type Event = {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  description?: string;
  path: string;
};

const columnHelper = createColumnHelper<Event>();

const columns = [
  columnHelper.accessor("id", {
    header: "Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Event Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("startTime", {
    header: "Start Time",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("endTime", {
    header: "End Time",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("location", {
    header: "Location",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
];

const useEventsTable = () => {
  console.log(useGetAllEvents());

  const defaultData: Event[] = useGetAllEvents().map(
    ({ id, name, start, end, location, description, path }) => ({
      id,
      name,
      date: start.toDateString(),
      startTime: start.toTimeString(),
      endTime: end.toTimeString(),
      location,
      description,
      path,
    }),
  );

  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useEventsTable;
