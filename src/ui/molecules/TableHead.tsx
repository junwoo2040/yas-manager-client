import { HeaderGroup } from "@tanstack/react-table";
import { ReactElement } from "react";

import TableHeaderGroup from "./TableHeaderGroup";

interface IProps<T> {
  headerGroups: HeaderGroup<T>[];
}

const TableHead = <T,>({ headerGroups }: IProps<T>): ReactElement => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <TableHeaderGroup key={headerGroup.id} headerGroup={headerGroup} />
      ))}
    </thead>
  );
};

export default TableHead;
