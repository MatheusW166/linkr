/* eslint-disable no-alert */
import React, { useState } from 'react';
import useInterval from 'use-interval';
import {
  MainStyled,
  PageContainerStyled,
  SectionStyled,
  PostsStyled,
} from './styled';
import { TitleH2Styled } from '../../styled';
import CreatePost from '../../components/CreatePost';
import Header from '../../components/Header';
import { useMutation, useRequest } from '../../hooks/request.hooks';
import { publishPost, searchPosts } from '../../services/api/timeline.services';
import PostsList from '../../components/PostsList';
import TrendingStyled from '../../components/Trending';

export default function Timeline() {
  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
    refresh: refreshPosts,
  } = useRequest(searchPosts);

  const { mutate: publish, loading: loadingPublish } = useMutation(publishPost);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    const description = event.target.description.value;

    publish({
      url,
      description,
      onSuccess: () => {
        refreshPosts();
        event.target.reset();
      },
      onError: () => {
        alert('Não foi possível publicar');
      },
    });
  };

  const [count, setCount] = React.useState(0);

  useInterval(() => {
    setCount(count + 1);
    console.log(count);
  }, 1000);

  return (
    <>
      <Header />
      <PageContainerStyled>
        <MainStyled>
          <TitleH2Styled>timeline</TitleH2Styled>
          <SectionStyled>
            <PostsStyled>
              <CreatePost loading={loadingPublish} onSubmit={handlePostSubmit} />
              <PostsList
                posts={posts}
                error={errorPosts}
                loading={loadingPosts}
                refreshPosts={refreshPosts}
              />
            </PostsStyled>
            <TrendingStyled
              posts={posts}
            />
          </SectionStyled>
        </MainStyled>
      </PageContainerStyled>
    </>
  );
}
