import { Row } from "@tanstack/react-table";
import { ReactElement } from "react";

import TableRow from "./TableRow";

interface IProps<T> {
  rows: Row<T>[];
  onRowClick?: (row: Row<T>) => void;
}

const TableBody = <T,>({ rows, onRowClick }: IProps<T>): ReactElement => {
  return (
    <tbody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          row={row}
          onClick={() => (onRowClick ? onRowClick(row) : "")}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
