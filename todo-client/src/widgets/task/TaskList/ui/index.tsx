import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import { Task } from "features/task";

import { tasksService } from "entities/task";

import { Pagination } from "shared/ui";

import { TaskListStyled } from "./TaskListStyled";

export const TaskList: FC = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const taskPerPage = 10;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastTask = currentPage * taskPerPage;
  const indexOfFirstTask = indexOfLastTask - taskPerPage;
  const currentTasks = tasksService.tasks?.state.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <TaskListStyled>
      {currentTasks?.map((task) => <Task key={task.id} task={task} />)}
      {tasksService.tasks && (
        <Pagination
          currentPage={currentPage}
          data={tasksService.tasks.state}
          taskPerPage={taskPerPage}
          onPageChange={paginate}
        />
      )}
    </TaskListStyled>
  );
});

