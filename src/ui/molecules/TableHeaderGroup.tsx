import { ReactElement } from "react";
import { HeaderGroup } from "@tanstack/react-table";

import TableHeader from "./TableHeader";

interface IProps<T> {
  headerGroup: HeaderGroup<T>;
}

const TableRow = <T,>({ headerGroup }: IProps<T>): ReactElement => {
  return (
    <tr>
      {headerGroup.headers.map((header) => (
        <TableHeader key={header.id} header={header} />
      ))}
    </tr>
  );
};

export default TableRow;
