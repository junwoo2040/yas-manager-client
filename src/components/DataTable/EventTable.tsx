import { FC } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Event, useEventDetails } from "./queries";
import { Link } from "react-router-dom";

const columnHelper = createColumnHelper<Event>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => <Link to={"/dashboard"}>{info.getValue()}</Link>,
  }),
  columnHelper.accessor("start", {
    header: () => "Start",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("end", {
    header: () => "End",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("location", {
    header: () => "Location",
    cell: (info) => info.getValue(),
  }),
];

const EventTable: FC = () => {
  const { tableData } = useEventDetails();

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
