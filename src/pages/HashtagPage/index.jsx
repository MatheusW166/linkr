import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../hooks/request.hooks';
import retrievePosts from '../../services/api/hashtags.services';
import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import TrendingStyled from '../../components/Trending';
import { TitleH2Styled } from '../../styled';
import {
  MainStyled,
  PageContainerStyled,
  SectionStyled,
  PostsStyled,
} from './styled';
import { getUserFollowers } from '../../services/api/timeline.services';

export default function HashtagPage() {
  const { hashtag } = useParams();

  const retrievePostsByHashtag = useCallback(
    () => retrievePosts(hashtag),
    [hashtag],
  );

  const [followedUsers, setFollowedUsers] = useState([]);

  const fetchFollowedUsers = async () => {
    try {
      const users = await getUserFollowers();
      setFollowedUsers(users);
    } catch {
      alert('Não foi possível carregar a pagina');
    }
  };

  useEffect(() => {
    retrievePosts(hashtag);
    fetchFollowedUsers();
  }, [hashtag]);

  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
    refresh: refreshPosts,
  } = useRequest(retrievePostsByHashtag);

  return (
    <>
      <Header followedUsers={followedUsers} />
      <PageContainerStyled>
        <MainStyled>
          <TitleH2Styled datatest="hashtag-title">
            #
            {hashtag}
          </TitleH2Styled>
          <SectionStyled>
            <PostsStyled>
              <PostsList
                posts={posts}
                error={errorPosts}
                loading={loadingPosts}
                followedUsers={followedUsers}
                page="hashtag"
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
