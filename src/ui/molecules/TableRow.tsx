import { Row } from "@tanstack/react-table";
import { ReactElement } from "react";

import TableCell from "./TableCell";

interface IProps<T> {
  row: Row<T>;
  onClick?: () => void;
}

const TableRow = <T,>({ row, onClick }: IProps<T>): ReactElement => {
  return (
    <tr onClick={onClick}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};

export default TableRow;
