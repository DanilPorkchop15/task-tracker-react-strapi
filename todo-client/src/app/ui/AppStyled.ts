import styled from "styled-components";

import { FlexCenterStyled,FlexColStyled } from "../../shared/ui/utils";

export const AppStyled = styled.div`
  ${FlexColStyled}
  ${FlexCenterStyled}
  min-height: 100vh;
  padding-inline: 20px;
  margin-inline: auto;
  font-family: "Lato", sans-serif;
`;
