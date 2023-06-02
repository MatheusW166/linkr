import styled from 'styled-components';

export const PageContainerStyled = styled.div`
  margin: 0 auto;
  padding-top: calc(72px + 64px);
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  width: min(616px, 100%);
  gap: 40px;
  margin: 0 auto;

  & > h3 {
    margin: 0 24px;
  }

  h2 {
    @media screen and (max-width: 616px) {
      margin-left: 24px;
    }
  }
`;
