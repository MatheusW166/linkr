import styled from 'styled-components';

export const LikesContainer = styled.div`
  width: 50px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  p {
    cursor: default;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    line-height: 14px;
  }
`;

export const LikesButton = styled.button`
  cursor: pointer;
  color: ${(props) => (props.isLiked ? '#AC0000' : '#FFFFFF')};
  font-size: 22px;
`;
