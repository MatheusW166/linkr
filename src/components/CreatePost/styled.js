import styled from 'styled-components';

export const CreatePostStyled = styled.div`
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 16px 18px;
  display: flex;
  gap: 18px;

  div:last-child {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    p {
      font-size: 20px;
      color: #707070;
      font-weight: 300;
    }
  }

  @media screen and (max-width: 800px) {
    border-radius: 0;
    img {
      display: none;
    }

    div:last-child {
      p {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;

export const CreatePostFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  button {
    width: min(112px, 100%);
    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    input,
    textarea,
    button {
      font-size: 13px;
    }
  }
`;

export const CreatePostInputStyled = styled.input`
  background: #efefef;
  border-radius: 5px;
  height: 30px;
  font-size: 15px;
  color: #1f1f1f;
  font-weight: 300;
  padding: 0 12px;
  ::placeholder {
    color: #949494;
  }
`;

export const CreatePostTextAreaStyled = styled.textarea`
  background: #efefef;
  border-radius: 5px;
  font-size: 15px;
  color: #1f1f1f;
  padding: 8px 12px;
  font-weight: 300;
  ::placeholder {
    color: #949494;
  }
`;
