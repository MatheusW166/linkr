import React from 'react';
import { ErrorMessageStyled } from '../../styled';
import Post from '../Post';
import PostsUlStyled from './styled';

export default function PostsList({
  posts,
  refreshPosts,
  loading,
  error,
}) {
  if (loading) return <h3>Loading...</h3>;

  if (error) {
    return (
      <ErrorMessageStyled>
        An error occured while trying to fetch the posts, please refresh the
        page.
      </ErrorMessageStyled>
    );
  }

  if (posts?.length === 0) return <h3>There are no posts yet.</h3>;

  return (
    <PostsUlStyled>
      {posts?.map((post) => (
        <li key={post.id}>
          <Post
            postId={post.id}
            userName={post.userName}
            userId={post.userId}
            userImageUrl={post.userImageUrl}
            description={post.description}
            url={post.url}
            refreshPosts={refreshPosts}
          />
        </li>
      ))}
    </PostsUlStyled>
  );
}
