import styled from 'styled-components';

export const PostStyled = styled.div`
  background: #171717;
  border-radius: 16px;
  padding: 16px 18px;
  display: flex;
  gap: 18px;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > p:nth-child(1) {
      font-size: 19px;
    }

    & > p:nth-child(2) {
      color: #b7b7b7;
      font-size: 16px;
      strong {
        font-weight: 700;
        color: #fff;
      }
    }
  }
`;

export const PostLinkPreviewStyled = styled.div`
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap-reverse;
  cursor: pointer;

  &:hover {
    background: #222;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    flex: 1 1 60px;

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
`;
