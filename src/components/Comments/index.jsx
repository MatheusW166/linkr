import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import Context from '../../Context';
import Comment from '../Comment';
import { CommentsContainerStyled, PostCommentStyled } from './styled';

export default function Comments({
  areCommentsVisible,
  comments,
  postId,
  setComments,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { REACT_APP_API_URL } = process.env;
  const token = localStorage.getItem('token');
  const { user } = useContext(Context);
  const [postCommentText, setPostCommentText] = useState('');

  function retrieveComments(id) {
    setIsLoading(true);

    axios.get(`${REACT_APP_API_URL}/posts/${id}/comments`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setComments(response.data);
        setIsLoading(false);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
        setIsLoading(false);
      });
  }

  function postNewComment(event) {
    const body = { text: postCommentText };

    event.preventDefault();
    setIsLoading(true);

    axios.post(`${REACT_APP_API_URL}/posts/${postId}/comments`, body, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        retrieveComments(postId);
        setPostCommentText('');
        setIsLoading(false);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    retrieveComments(postId);
  }, []);

  return (
    <CommentsContainerStyled
      areCommentsVisible={areCommentsVisible}
      data-test="comment-box"
    >
      {comments.map((comment) => (
        <>
          <Comment
            comment={comment}
          />
          <hr />
        </>
      ))}
      <PostCommentStyled>
        <img src={user?.photo} alt="avatar" />
        <div>
          <input
            name="text"
            type="text"
            placeholder="write a comment..."
            value={postCommentText}
            onChange={(event) => setPostCommentText(event.target.value)}
            disabled={isLoading}
            maxLength="280"
            data-test="comment-input"
          />
          <button
            type="submit"
            disabled={isLoading}
            onClick={postNewComment}
            data-test="comment-submit"
          >
            <BsSend />
          </button>
        </div>
      </PostCommentStyled>
    </CommentsContainerStyled>
  );
}
