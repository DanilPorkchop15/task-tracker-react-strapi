import { tasksService } from "entities/task";

import { MarkAllButtonStyled, UnmarkAllButtonStyled } from "./CheckAllTasksStyled";

interface CheckAllTasksProps {
  uncheck?: boolean;
}

export const CheckAllTasksFeature = ({ uncheck }: CheckAllTasksProps) => {
  return uncheck ? (
    <UnmarkAllButtonStyled $danger onClick={async () => tasksService.markAll(false)}>
      Uncheck all
    </UnmarkAllButtonStyled>
  ) : (
    <MarkAllButtonStyled $success onClick={async () => tasksService.markAll(true)}>
      Check all
    </MarkAllButtonStyled>
  );
};
