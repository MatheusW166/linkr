import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import usePostsPagination from '../../hooks/posts.hooks';
import InfiniteScroll from '../../components/InfiniteScroll';

export default function HashtagPage() {
  const { hashtag } = useParams();
  const [followedUsers, setFollowedUsers] = useState([]);

  const fetchFollowedUsers = async () => {
    try {
      const users = await getUserFollowers();
      setFollowedUsers(users);
    } catch {
      alert('Não foi possível carregar a pagina');
    }
  };

  const fetchPosts = ({ limit, offset }) => retrievePosts({ hashtag, limit, offset });

  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
    refresh: refreshPosts,
    nextPage,
  } = usePostsPagination({ promise: fetchPosts, limit: 10 });

  useEffect(() => {
    fetchFollowedUsers();
    refreshPosts();
  }, [hashtag]);

  const loadingNewPosts = loadingPosts && posts?.length;

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
                page="hashtags"
                refreshPosts={refreshPosts}
              />
              <InfiniteScroll
                dataLength={posts?.length}
                fetch={nextPage}
                message="Loading more posts..."
                loadingNewData={loadingNewPosts}
              />
            </PostsStyled>
            <TrendingStyled posts={posts} />
          </SectionStyled>
        </MainStyled>
      </PageContainerStyled>
    </>
  );
}
