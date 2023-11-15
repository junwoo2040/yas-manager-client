import { useState } from "react";

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  useGetAllEventTasks,
  useGetEventFromPath,
} from "@hooks/database/fetchEvent";
import { useParams } from "react-router-dom";

type TaskRow = {
  status: string;
  name: string;
  description?: string;
  assignees: string[];
};

const columnHelper = createColumnHelper<TaskRow>();

const columns = [
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("assignees", {
    header: "Assigned To",
    cell: (info) => info.getValue(),
  }),
];

const useEventTasksTable = () => {
  const { eventPath } = useParams();
  const event = useGetEventFromPath(eventPath);
  const defaultData: TaskRow[] = useGetAllEventTasks(event?.id).map(
    ({ name, status, description, assigneeIds }) => ({
      status: status.toString(),
      name,
      description,
      assignees: assigneeIds,
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

export default useEventTasksTable;
