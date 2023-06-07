import styled from 'styled-components';

export const PostStyled = styled.div`
  background: #171717;
  border-radius: 16px;
  padding: 16px 18px;
  display: flex;
  gap: 18px;
  position: relative;
  overflow: hidden;

  a {
    width: fit-content;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;

    & > p:nth-child(1) {
      font-size: 19px;
    }

    & > p:nth-child(2),
    & > textarea {
      color: #b7b7b7;
      font-size: 16px;
      strong {
        font-weight: 700;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 616px) {
    border-radius: 0;
    & > img {
      width: 40px;
      height: 40px;
    }

    & > div:last-child {
      & > p:nth-child(1) {
        font-size: 16px;
      }

      & > p:nth-child(2),
      & > textarea {
        font-size: 14px;
      }
    }
  }
`;

export const PostActionsStyled = styled.div`
  position: absolute;
  right: 18px;
  display: flex;
  gap: 12px;

  svg:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
