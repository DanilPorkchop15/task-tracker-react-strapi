import { css } from "styled-components";

const flexStyled = css`
  display: flex;
`;

const flexColStyled = css`
  ${flexStyled};
  flex-direction: column;
`;

const flexCenterStyled = css`
  ${flexStyled};
  justify-content: center;
  align-items: center;
`;

const alignCenterStyled = css`
  ${flexStyled};
  align-items: center;
`;

const justifyCenterStyled = css`
  ${flexStyled};
  justify-content: center;
`;

const justifyBetweenStyled = css`
  ${flexStyled};
  justify-content: space-between;
`;

const alignBaselineStyled = css`
  ${flexStyled};
  align-items: baseline;
`;

export {
  flexStyled,
  flexColStyled,
  flexCenterStyled,
  alignCenterStyled,
  justifyCenterStyled,
  justifyBetweenStyled,
  alignBaselineStyled,
};
