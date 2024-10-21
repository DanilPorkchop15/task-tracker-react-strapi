import styled from "styled-components";

import { UserSelect } from "features/user";

import { alignCenterStyled, flexColStyled, Input } from "shared/ui";

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

export const TaskOptionsUserSelectStyled = styled(UserSelect)`
  max-width: 250px;
`;
