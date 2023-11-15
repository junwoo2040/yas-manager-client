import { useGetAllEventDetailsQuery } from "@src/graphql/generated";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import graphQLRequestClient from "@utils/clients/graphQLRequestClient";
import { useState } from "react";

export type EventRow = {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  description?: string;
  path: string;
};

const columnHelper = createColumnHelper<EventRow>();

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
];

const useEventsTable = () => {
  const { data: rawData } = useGetAllEventDetailsQuery(
    graphQLRequestClient,
    {},
  );

  const defaultData = rawData?.events.map(({ id, name, start, end, path }) => ({
    id,
    name,
    path,
    date: start.toDateString(),
    startTime: start.toTimeString(),
    endTime: end.toTimeString(),
  }));

  const [data, setData] = useState(() => defaultData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useEventsTable;
