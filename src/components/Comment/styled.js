import styled from 'styled-components';

export const CommentContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 5px;
  align-items: center;
  gap: 18px;  
  font-family: 'Lato';

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const TextStyled = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #F3F3F3;
`;

export const UserNameStyled = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ACACAC;
  display: flex;
  flex-direction: row;
  gap: 4px;

  div {
    font-weigth: 400;
    font-size: 14px;
    color: #565656;
  }
`;
