import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "@tanstack/react-table";

import { useEventsTable } from "@hooks/components";
import { EventRow } from "@hooks/components/useEventsTable";

import TableBody from "@molecules/TableBody";
import TableHead from "@molecules/TableHead";

const EventsTable: FC = () => {
  const table = useEventsTable();
  const navigate = useNavigate();

  return (
    <table>
      <TableHead headerGroups={table.getHeaderGroups()} />
      <TableBody
        rows={table.getRowModel().rows}
        onRowClick={(row: Row<EventRow>) =>
          navigate(`/event/${row.original.path}`)
        }
      />
    </table>
  );
};

export default EventsTable;
