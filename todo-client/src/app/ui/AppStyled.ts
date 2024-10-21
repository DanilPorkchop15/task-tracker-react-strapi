import styled from "styled-components";

import { flexCenterStyled, flexColStyled } from "shared/ui";

export const AppStyled = styled.div`
  ${flexColStyled}
  ${flexCenterStyled}
  min-height: 100vh;
  padding-inline: 20px;
  margin-inline: auto;
  font-family: "Lato", sans-serif;
`;
