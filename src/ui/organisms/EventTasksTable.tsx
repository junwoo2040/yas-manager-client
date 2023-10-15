import { FC } from "react";

import { useEventTasksTable } from "@hooks/components";

import TableHead from "@molecules/TableHead";
import TableBody from "@molecules/TableBody";

const EventTasksTable: FC = () => {
  const table = useEventTasksTable();

  return (
    <table>
      <TableHead headerGroups={table.getHeaderGroups()} />
      <TableBody rows={table.getRowModel().rows} />
    </table>
  );
};

export default EventTasksTable;
