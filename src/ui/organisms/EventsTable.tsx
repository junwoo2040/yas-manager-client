import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Row,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import TableBody from "@molecules/TableBody";
import TableHead from "@molecules/TableHead";

import {
  GetAllEventDetailsQuery,
  useGetAllEventDetailsQuery,
} from "@src/graphql/generated";
import graphQLRequestClient from "@utils/clients/graphQLRequestClient";

type EventRow = {
  id?: string;
  name?: string;
  path?: string;
  date?: string;
  start?: string;
  end?: string;
};

const columnHelper = createColumnHelper<EventRow>();

const EventsTable: FC = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] =
    useState<GetAllEventDetailsQuery["events"]>();

  const { data: rawData, isLoading } =
    useGetAllEventDetailsQuery(graphQLRequestClient);

  useEffect(() => {
    console.log("Set Table Data");
    setTableData(rawData?.events || undefined);
  }, [rawData]);

  const [columns, data] = useMemo(() => {
    const cols = [
      columnHelper.accessor("name", {
        header: "Event Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("date", {
        header: "Date",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("start", {
        header: "Start Time",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("end", {
        header: "End Time",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "actions",
        cell: (props) => <button>More</button>,
      }),
    ];

    return [
      cols,
      rawData?.events?.map((input) => ({
        ...Object.fromEntries(
          Object.entries(input).map(([key, value]) => [
            key,
            value || undefined,
          ]),
        ),
        date: new Date(input.start).toDateString(),
        start: new Date(input.start).toTimeString(),
        end: new Date(input.end).toTimeString(),
      })) || [],
    ];
  }, [rawData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <table className="border-collapse border border-slate-50">
          <TableHead headerGroups={table.getHeaderGroups()} />
          <TableBody
            rows={table.getRowModel().rows}
            onRowClick={(row: Row<EventRow>) =>
              navigate(`/event/${row.original.path}`)
            }
          />
        </table>
      )}
    </>
  );
};

export default EventsTable;
