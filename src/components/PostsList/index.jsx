import React from 'react';
import { ErrorMessageStyled, TitleH3Styled } from '../../styled';
import Post from '../Post';
import PostsUlStyled from './styled';
import getPostKey from './utils';

export default function PostsList({
  posts,
  refreshPosts,
  loading,
  followedUsers,
  page,
  error,
}) {
  if (error) {
    return (
      <ErrorMessageStyled>
        An error occured while trying to fetch the posts, please refresh the
        page.
      </ErrorMessageStyled>
    );
  }

  if (loading) {
    return <TitleH3Styled>Loading...</TitleH3Styled>;
  }

  if (posts?.length === 0) {
    if (page === 'userpage') {
      return <TitleH3Styled data-test="message">No posts found</TitleH3Styled>;
    }
    if (followedUsers?.length > 0) {
      return (
        <TitleH3Styled data-test="message">
          No posts found from your friends
        </TitleH3Styled>
      );
    }
    return (
      <TitleH3Styled data-test="message">
        You don&apos;t follow anyone yet. Search for new friends!
      </TitleH3Styled>
    );
  }

  return (
    <PostsUlStyled>
      {posts?.map((post) => (
        <li key={getPostKey(post)}>
          <Post
            postId={post.id}
            userName={post.userName}
            userId={post.userId}
            userImageUrl={post.userImageUrl}
            description={post.description}
            url={post.url}
            refreshPosts={refreshPosts}
            repostUserId={post.repostUserId}
            repostUserName={post.repostUserName}
            repostCount={post.repostCount}
          />
        </li>
      ))}
    </PostsUlStyled>
  );
}
