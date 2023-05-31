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
export const OutButton = styled.button`
  position: fixed;
  width: 140px;
  height: 40px;
  background-color: #151515;
  color: #FFFFFF;
  right: -15px;
  margin-top: 72px;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
`;
