import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { LikesButton, LikesContainer } from './styled';

export default function Likes({ postId }) {
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { REACT_APP_API_URL } = process.env;
  const token = localStorage.getItem('token');

  function retrieveLikes(id) {
    axios.get(`${REACT_APP_API_URL}/posts/${id}/likes`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setLikes(response.data);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
      });
  }

  function addLike(id) {
    setIsLoading(true);

    const body = {};
    axios.put(`${REACT_APP_API_URL}/posts/${id}/like`, body, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setLikes({
          isLiked: !likes.isLiked,
          totalLikes: (likes.isLiked ? (likes.totalLikes - 1) : (likes.totalLikes) + 1),
        });
        setIsLoading(false);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    retrieveLikes(postId);
  }, []);

  return (
    <LikesContainer>
      <LikesButton
        disabled={isLoading}
        isLiked={likes.isLiked}
        isLoading={isLoading}
        onClick={() => addLike(postId)}
      >
        {likes.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </LikesButton>
      <p>
        {likes.totalLikes}
        {likes.totalLikes === 1 ? ' like' : ' likes'}
      </p>
    </LikesContainer>
  );
}
