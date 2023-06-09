import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Comment from '../Comment';
import CommentsContainerStyled from './styled';

export default function Comments({
  areCommentsVisible,
  comments,
  postId,
  setComments,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { REACT_APP_API_URL } = process.env;
  const token = localStorage.getItem('token');

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

  useEffect(() => {
    retrieveComments(postId);
  }, []);

  return (
    <CommentsContainerStyled
      areCommentsVisible={areCommentsVisible}
    >
      {comments.map((comment) => (
        <>
          <Comment
            comment={comment}
          />
          <hr />
        </>
      ))}
    </CommentsContainerStyled>
  );
}
