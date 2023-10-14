import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { flexRender } from "@tanstack/react-table";

import { useEventsTable } from "@hooks/components";

const EventsTable: FC = () => {
  const table = useEventsTable();
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        {
          // Map header groups
          table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {
                // Map headers
                headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody>
        {
          // Map rows
          table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              onClick={() => navigate(`/event/${row.original.path}`)}
            >
              {
                // Map cells
                row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default EventsTable;
