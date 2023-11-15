import { Header, flexRender } from "@tanstack/react-table";
import { ReactElement } from "react";

interface IProps<T, U> {
  header: Header<T, U>;
}

const TableHeader = <T, U>({ header }: IProps<T, U>): ReactElement => {
  return (
    <th key={header.id} className="border-collapse border border-black p-2">
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </th>
  );
};

export default TableHeader;
