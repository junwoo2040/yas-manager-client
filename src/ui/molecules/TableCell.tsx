import { Cell, flexRender } from "@tanstack/react-table";
import { ReactElement } from "react";

interface IProps<T, U> {
  cell: Cell<T, U>;
}

const TableCell = <T, U>({ cell }: IProps<T, U>): ReactElement => {
  return (
    <td className="border-collapse border border-black p-2">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};

export default TableCell;
