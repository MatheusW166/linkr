import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #151515;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const UserDropdownStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 100%;
  &:hover {
    background: #222;
  }
  svg {
    font-size: 32px;
  }
`;
