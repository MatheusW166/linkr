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

  @media screen and (max-width: 616px) {
    width: 100%;
  }
`;

export const SectionStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const PostsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 611px;
  gap: 30px;
  position: relative;

  span:last-child {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    border-width: 4px;
  }
`;
