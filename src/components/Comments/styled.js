import styled from 'styled-components';

const CommentsContainerStyled = styled.div`
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

export default CommentsContainerStyled;
