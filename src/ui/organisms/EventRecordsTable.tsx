import { FC } from "react";

import { useEventRecordsTable } from "@hooks/components";

import TableHead from "@molecules/TableHead";
import TableBody from "@molecules/TableBody";

const EventRecordsTable: FC = () => {
  const table = useEventRecordsTable();

  return (
    <table>
      <TableHead headerGroups={table.getHeaderGroups()} />
      <TableBody rows={table.getRowModel().rows} />
    </table>
  );
};

export default EventRecordsTable;
