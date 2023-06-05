import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import { TitleH2Styled } from '../../styled';
import { MainStyled, PageContainerStyled } from './styled';

export default function HashtagPage() {
  const { hashtag } = useParams();

  const [loadingPosts, setLoadingPosts] = useState(true);
  const [posts, setPosts] = useState(null);
  const [errorPosts, setErrorPosts] = useState(null);

  const { REACT_APP_API_URL } = process.env;
  const token = localStorage.getItem('token');

  function retrievePosts(hashtagName) {
    axios.get(`${REACT_APP_API_URL}/hashtag/${hashtagName}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setPosts(response.data);
        setLoadingPosts(false);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
        setErrorPosts(error);
        setLoadingPosts(false);
      });
  }

  useEffect(() => {
    retrievePosts(hashtag);
  }, []);

  return (
    <>
      <Header />
      <PageContainerStyled>
        <MainStyled>
          <TitleH2Styled>
            #
            {hashtag}
          </TitleH2Styled>
          <PostsList
            error={errorPosts}
            loading={loadingPosts}
            posts={posts}
          />
        </MainStyled>
      </PageContainerStyled>
    </>
  );
}
