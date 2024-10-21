import styled from "styled-components";

import { UserSelect } from "features/user/@x";

import { Input } from "shared/ui";
import { flexCenterStyled, flexColStyled } from "shared/ui/utils";

export const TaskEditFormStyled = styled.form`
  ${flexColStyled};
  ${flexCenterStyled};
  margin-top: 20px;
  gap: 20px;
  align-items: flex-start;
  flex-grow: 1;
  padding: 20px;
  background-color: var(--foreground-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
`;

export const TaskLabelStyled = styled.label`
  ${flexColStyled};
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const LabelWithSelect = styled.div`
  ${flexColStyled};
  align-self: center;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const TaskUserSelectStyled = styled(UserSelect)`
  border-radius: 10px;
`;

export const TaskEditInputStyled = styled(Input)`
  width: 100%;
`;
