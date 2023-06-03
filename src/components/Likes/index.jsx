import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
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
          ...likes,
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

  function tooltipMessage({ isLiked, latestLikes, totalLikes }) {
    let message = '';
    let namedLikes = 0;

    if (!totalLikes) return '';

    if (isLiked) {
      namedLikes += 1;

      switch (totalLikes) {
        case 1:
          message = 'You';
          break;

        case 2:
          message = `You and ${latestLikes[0]?.userName}`;
          break;

        case 3:
          message = `You, ${latestLikes[0]?.userName} and 1 other person`;
          break;

        default:
          namedLikes += 1;
          message = `You, ${latestLikes[0]?.userName} and ${totalLikes - namedLikes} other people`;
      }
    } else {
      switch (totalLikes) {
        case 1:
          message = `${latestLikes[0]?.userName}`;
          break;

        case 2:
          message += `${latestLikes[0]?.userName} and ${latestLikes[1]?.userName}`;
          break;

        case 3:
          message += `${latestLikes[0]?.userName}, ${latestLikes[1]?.userName} and 1 other person`;
          break;

        default:
          namedLikes += 1;
          message += `${latestLikes[0]?.userName}, ${latestLikes[1]?.userName} and ${totalLikes - namedLikes} other people`;
      }
    }

    return message;
  }

  useEffect(() => {
    retrieveLikes(postId);
  }, []);

  return (
    <LikesContainer>
      <LikesButton
        type="button"
        disabled={isLoading}
        isLiked={likes.isLiked}
        isLoading={isLoading}
        onClick={() => addLike(postId)}
      >
        {likes.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </LikesButton>
      <p
        data-tooltip-id="likes-tooltip"
        data-tooltip-content={tooltipMessage(likes)}
        data-tooltip-place="bottom"
      >
        {likes.totalLikes}
        {likes.totalLikes === 1 ? ' like' : ' likes'}
      </p>
      <Tooltip id="likes-tooltip" />
    </LikesContainer>
  );
}
