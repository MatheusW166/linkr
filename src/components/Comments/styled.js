import styled from 'styled-components';

export const CommentsContainerStyled = styled.div`
  block: fit-content;
  width: 100%;
  display: ${(props) => (props.areCommentsVisible ? 'flex' : 'none')};
  flex-direction: column;
  padding: 5px 20px;
  background-color: #1E1E1E;
  border-radius: 16px;

  hr {
    height: 1px;
    width: 100%;
    color: #353535;
  }
`;

export const PostCommentStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 5px;
  align-items: center;
  gap: 18px;  
  font-family: 'Lato';

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    background-color: #252525;
    padding: 10px 15px;
    gap: 15px;

    input {
      width: 100%;
      font-weight: 400;
      font-size: 14px;
      color: #ACACAC;

      ::placeholder {
      color: #575757;
      font-style: italic;
      }
    }

    button {
      font-size: 16px;
      color: #F3F3F3;
    }
  }
`;
