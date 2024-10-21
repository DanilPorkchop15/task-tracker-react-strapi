import styled from "styled-components";

import {UserSelect} from "features/user";

import { alignCenterStyled, Button, flexColStyled,Input } from "shared/ui";

export const TaskOptionsStyled = styled.div`
  ${flexColStyled};
  max-width: 666px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const TaskOptionsBlockStyled = styled.div`
  ${alignCenterStyled};
  width: 100%;
`;

export const NewTaskInputStyled = styled(Input)`
  flex-grow: 1;
  border-radius: 10px 0 0 0;
  box-shadow: var(--shadow);
`;

export const NewTaskButtonStyled = styled(Button)`
  border-radius: 0 10px 0 0;
  align-self: stretch;
`;

export const TaskOptionsUserSelectStyled = styled(UserSelect)`
  max-width: 250px;
`;

export const MarkAllButtonStyled = styled(Button)`
  flex-grow: 1;
  border-radius: 0 0 0 10px;
`;

export const UnmarkAllButtonStyled = styled(Button)`
  flex-grow: 1;
  border-radius: 0 0 10px 0;
`;
