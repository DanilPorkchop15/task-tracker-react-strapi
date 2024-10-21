import { FC, useEffect,useState } from "react";

import { Task as ITask, tasksService } from "../../entities/task";
import { usersService } from "../../entities/user";
import { Button } from "../../shared/ui";
import TaskEdit from "../TaskEdit/TaskEdit";

import { TaskActionsStyled, TaskBlockStyled, TaskSectionStyled, TaskStyled } from "./TaskStyled";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const [doEdit, setDoEdit] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    usersService
      .getUser(task.user.id)
      .then((user) => setUsername(user.username))
      .catch((e: Error) => console.log("User fetch error " + e));
  }, [task.user]);

  const handleToggle = async () =>
    tasksService.updateTask(task.documentId, { title: task.title, completed: !task.completed, user: task.user.id });
  const handleDelete = async () => tasksService.deleteTask(task.documentId);

  const toggleEdit = () => setDoEdit(!doEdit);

  return (
    <TaskStyled>
      <TaskSectionStyled>
        <TaskBlockStyled>
          <span>{task.id}</span>
          <p>{task.title}</p>
        </TaskBlockStyled>

        <TaskBlockStyled>
          <TaskBlockStyled>
            <span>{username ? username : "loading..."}</span>
          </TaskBlockStyled>

          <TaskBlockStyled>
            <input checked={task.completed} id="completed" name="completed" type="checkbox" onChange={handleToggle} />
            <TaskActionsStyled>
              <Button disabled={username === null} onClick={toggleEdit}>
                {doEdit ? "Cancel" : "Edit"}
              </Button>
              <Button $danger onClick={handleDelete}>
                Delete
              </Button>
            </TaskActionsStyled>
          </TaskBlockStyled>
        </TaskBlockStyled>
      </TaskSectionStyled>

      <TaskSectionStyled>{doEdit && <TaskEdit task={task} username={username} />}</TaskSectionStyled>
    </TaskStyled>
  );
};

export default Task;
