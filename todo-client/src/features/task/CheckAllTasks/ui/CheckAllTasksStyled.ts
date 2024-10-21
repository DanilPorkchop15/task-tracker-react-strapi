import styled from "styled-components";

import { Button } from "shared/ui";

export const MarkAllButtonStyled = styled(Button)`
  flex-grow: 1;
  border-radius: 0 0 0 10px;
`;

export const UnmarkAllButtonStyled = styled(Button)`
  flex-grow: 1;
  border-radius: 0 0 10px 0;
`;