import { FC } from "react";
import TaskTable from "@src/components/DataTable/TaskTable";

const Tasks: FC = () => {
  return (
    <>
      <h1>Tasks</h1>
      <TaskTable />
    </>
  );
};

export default Tasks;
