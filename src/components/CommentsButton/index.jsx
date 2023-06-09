import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { CommentsButtonStyled, CommentsButtonContainerStyled } from './styled';

export default function CommentsButton({
  areCommentsVisible,
  setAreCommentsVisible,
  totalComments,
}) {
  return (
    <CommentsButtonContainerStyled>
      <CommentsButtonStyled
        type="button"
        onClick={() => setAreCommentsVisible(!areCommentsVisible)}
        data-test="comment-btn"
      >
        <AiOutlineComment />
      </CommentsButtonStyled>
      <p data-test="comment-counter">
        {totalComments}
        {totalComments === 1 ? ' comment' : ' comments'}
      </p>
    </CommentsButtonContainerStyled>
  );
}
