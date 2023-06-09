import React from 'react';
import { Link } from 'react-router-dom';
import { CommentContainerStyled, TextStyled, UserNameStyled } from './styled';

export default function Comment({ comment }) {
  const {
    isAuthor,
    isFollowed,
    userId,
    userName,
    userPicture,
    text,
  } = comment;

  function roleMessage(isPostauthor, isUserFollowed) {
    if (isPostauthor) {
      return '• post’s author';
    }

    if (isUserFollowed) {
      return '• following';
    }

    return '';
  }

  return (
    <CommentContainerStyled>
      <img src={userPicture} alt="avatar" />
      <div>
        <UserNameStyled>
          <Link to={`/user/${userId}`}>
            {userName}
          </Link>
          <div>
            {roleMessage(isAuthor, isFollowed)}
          </div>
        </UserNameStyled>
        <TextStyled>{text}</TextStyled>
      </div>
    </CommentContainerStyled>
  );
}
