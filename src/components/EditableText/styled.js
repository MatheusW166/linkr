import styled from 'styled-components';

const EditableTextStyled = styled.textarea`
  background: #fff;
  border-radius: 8px;
  padding: 8px;
  color: #4c4c4c !important;
  min-height: 35px;
  height: ${({ height }) => `${height + 24}px`};
  ::placeholder {
    opacity: 0.5;
  }
`;

export default EditableTextStyled;
