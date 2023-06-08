/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TitleH2Styled } from '../../styled';
import {
  MainStyled,
  PageContainerStyled,
  SectionStyled,
  PostsStyled,
} from './styled';
import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import TrendingStyled from '../../components/Trending';
import client from '../../services/api/api.client';
import { getUserFollowers } from '../../services/api/timeline.services';

export default function UserPage() {
  const { id } = useParams();

  const [loadingPosts, setLoadingPosts] = useState(true);
  const [posts, setPosts] = useState(null);
  const [errorPosts, setErrorPosts] = useState(null);
  const [user, setUser] = useState(null);

  const [isFollowing, setIsFollowing] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    fetchFollowedUsers();
  }, []);

  useEffect(() => {
    client
      .get(`/search/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
      });

    client
      .get(`/search/posts/${id}`)
      .then((res) => {
        setPosts(res.data);
        setLoadingPosts(null);
      })
      .catch((error) => {
        setLoadingPosts(null);
        setErrorPosts(error);
      });

    client
      .get(`/user/${id}`)
      .then((res) => setIsFollowing(res.data))
      .catch((err) => alert(err.response));
  }, [id]);

  function followUser() {
    setIsSubmitting(true);
    client
      .post(`/user/${id}`, {})
      .then((res) => {
        setIsFollowing(res.data);
        setIsSubmitting(false);
      })
      .catch((err) => {
        alert(err.response.data);
        setIsSubmitting(false);
      });
  }

  function unfollowUser() {
    setIsSubmitting(true);
    client
      .delete(`/user/${id}`, {})
      .then((res) => {
        setIsFollowing(res.data);
        setIsSubmitting(false);
      })
      .catch(() => {
        alert('Não foi possível executar a operação');
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <Header followedUsers={followedUsers} />
      <PageContainerStyled>
        <MainStyled>
          <TitleH2Styled isFollowing={isFollowing}>
            {user ? user?.name : 'User'}
            &apos;s posts
            <button disabled={isSubmitting} type="button" onClick={isFollowing === false ? followUser : unfollowUser}>
              {isFollowing === false ? 'Follow' : 'Unfollow'}
            </button>
          </TitleH2Styled>
          <SectionStyled>
            <PostsStyled>
              <PostsList
                posts={posts}
                error={errorPosts}
                loading={loadingPosts}
                followedUsers={followedUsers}
                page="userpage"
              />
            </PostsStyled>
            <TrendingStyled />
          </SectionStyled>
        </MainStyled>
      </PageContainerStyled>
    </>
  );
}
