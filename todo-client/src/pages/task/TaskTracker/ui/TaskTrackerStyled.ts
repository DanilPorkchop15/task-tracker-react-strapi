import styled from "styled-components";

import { alignCenterStyled, flexColStyled } from "shared/ui";

export const TaskTrackerStyled = styled.div`
  ${flexColStyled}
  ${alignCenterStyled}
  padding-top: 40px;
  gap: 10px;
  width: 100%;
`;

export const TaskTrackerTitleH1 = styled.h1`
  margin-top: 20px;
`;

export const TaskTrackerTitleH2 = styled.h2`
  margin-top: 20px;
`;
