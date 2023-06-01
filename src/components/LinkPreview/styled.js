import styled from 'styled-components';

const LinkPreviewStyled = styled.a`
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  overflow: hidden;
  display: flex;
  cursor: pointer;

  &:hover {
    background: #222;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    flex: 1;

    h3 {
      font-size: 16px;
      color: #cecece;
    }

    p {
      font-size: 11px;
      color: #9b9595;
    }

    small {
      font-size: 11px;
      color: #cecece;
    }
  }

  img {
    height: 100%;
    max-width: 150px;
    object-fit: cover;
  }

  @media screen and (max-width: 616px) {
    & > div:first-child {
      h3 {
        font-size: 11px;
      }

      p {
        font-size: 9px;
      }

      small {
        font-size: 9px;
      }
    }

    img {
      max-width: 95px;
    }
  }
`;

export default LinkPreviewStyled;
