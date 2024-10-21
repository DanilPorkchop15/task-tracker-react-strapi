import type { FC } from "react";

import { TaskList, TaskOptions } from "widgets/task";

import { TaskTrackerStyled, TaskTrackerTitleH1, TaskTrackerTitleH2 } from "./TaskTrackerStyled";

export const TaskTracker: FC = () => {
  return (
    <TaskTrackerStyled>
      <TaskTrackerTitleH1>Task Tracker</TaskTrackerTitleH1>
      <TaskTrackerTitleH2>Options</TaskTrackerTitleH2>
      <TaskOptions />
      <TaskTrackerTitleH2>Tasks</TaskTrackerTitleH2>
      <TaskList />
    </TaskTrackerStyled>
  );
};
