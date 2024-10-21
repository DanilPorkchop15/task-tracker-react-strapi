import { tasksCheckerService } from "../../services";

import { MarkAllButtonStyled, UnmarkAllButtonStyled } from "./CheckAllTasksStyled";

interface CheckAllTasksProps {
  uncheck?: boolean;
}

export const CheckAllTasksFeature = ({ uncheck }: CheckAllTasksProps) => {
  return uncheck ? (
    <UnmarkAllButtonStyled $danger onClick={async () => tasksCheckerService.markAll(false)}>
      Uncheck all
    </UnmarkAllButtonStyled>
  ) : (
    <MarkAllButtonStyled $success onClick={async () => tasksCheckerService.markAll(true)}>
      Check all
    </MarkAllButtonStyled>
  );
};
