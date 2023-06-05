import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TrendingStyled from './styled';
import { TitleH4Styled } from '../../styled';

export default function Trending() {
  const [hashtags, setHashtags] = useState([]);
  const { REACT_APP_API_URL } = process.env;

  function retrieveTrending() {
    axios.get(`${REACT_APP_API_URL}/trending`)
      .then((response) => {
        setHashtags(response.data);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
      });
  }

  useEffect(() => {
    retrieveTrending();
  }, []);

  return (
    <TrendingStyled>
      <TitleH4Styled>
        trending
      </TitleH4Styled>
      <hr />
      {hashtags.map((hashtag) => (
        <Link
          key={hashtag.hashtag}
          to={`/hashtag/${hashtag.hashtag}`}
        >
          <p>
            #
            {hashtag.hashtag}
          </p>
        </Link>
      ))}
    </TrendingStyled>
  );
}
