import styled from "styled-components";

import { alignBaselineStyled, flexColStyled, flexStyled, justifyBetweenStyled } from "shared/ui";

export const TaskStyled = styled.div`
  ${flexColStyled};
  ${justifyBetweenStyled};
  width: 80dvw;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--foreground-color);
  transition: background-color 0.2s ease-in-out;
  border: 1px solid var(--primary-color);

  &:hover {
    border: 1px solid black;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
  }
`;

export const TaskSectionStyled = styled.section`
  ${flexStyled}
  ${justifyBetweenStyled}
  ${alignBaselineStyled}
  flex-grow: 1;
`;

export const TaskBlockStyled = styled.div`
  ${flexStyled}
  ${alignBaselineStyled}
  ${justifyBetweenStyled}
  gap: 40px;
`;

export const TaskActionsStyled = styled.div`
  ${flexStyled}
  ${alignBaselineStyled}
  gap: 10px;
`;
