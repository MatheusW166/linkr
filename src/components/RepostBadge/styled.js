import styled from 'styled-components';

const RepostBadgeStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: #1e1e1e;
  width: 100%;
  height: 100%;
  font-size: 11px;
  border-radius: 16px;
  padding: 8px 18px;
  display: flex;
  align-items: start;
  transform: translateY(-32px);

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    font-size: 16px;
  }

  strong {
    font-weight: 700;
  }

  @media screen and (max-width: 616px) {
    border-radius: 0;
  }
`;

export default RepostBadgeStyled;
