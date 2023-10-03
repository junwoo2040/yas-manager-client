import { FC } from "react";
import { useReactTable } from "@tanstack/react-table";

const TaskTable: FC = () => {
  const table = useReactTable({});

  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TaskTable;
