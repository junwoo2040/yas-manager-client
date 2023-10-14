import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import {
  useGetAllEventRecords,
  useGetEventFromPath,
} from "@hooks/database/fetchEvent";
import { useParams } from "react-router-dom";

type Record = {
  id: string;
  type: string;
  check: number;
  author: string;
  date: string;
};

const columnHelper = createColumnHelper<Record>();

const columns = [
  columnHelper.accessor("id", {
    header: "Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("type", {
    header: "Type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("check", {
    header: "Check",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("author", {
    header: "Author",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => info.getValue(),
  }),
];

const useEventRecordsTable = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);

  const defaultData: Record[] = useGetAllEventRecords(event?.id).map(
    ({ id, type, check, author, date }) => ({
      id,
      type: type.toString(),
      check,
      author: author.fullName,
      date: date.toDateString(),
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

export default useEventRecordsTable;
