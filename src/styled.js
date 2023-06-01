import styled from 'styled-components';

export const UserAvatarStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;

  @media screen and (max-width: 800px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserNameStyled = styled.p`
`;

export const TitleH1Styled = styled.h1`
  font-family: 'Passion One', sans-serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-size: 49px;

  @media screen and (max-width: 800px) {
    font-size: 45px;
  }
`;

export const TitleH2Styled = styled.h2`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 43px;

  @media screen and (max-width: 800px) {
    font-size: 33px;
  }
`;

export const TitleH3Styled = styled.h3`
  font-weight: 700;
  font-size: 24px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ErrorMessageStyled = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #ef4444;
`;

export const PrimaryButtonStyled = styled.button`
  background: #1877f2;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  height: 30px;
  text-align: center;
  padding: 0 16px;
`;

export const SecondaryButtonStyled = styled(PrimaryButtonStyled)`
  background: #fff;
  color: #1877f2;
`;

export const LoaderStyled = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
