import React from 'react';
import { MainStyled, PageContainerStyled, PostsUlStyled } from './styled';
import { TitleH2Styled } from '../../styled';
import CreatePost from '../../components/CreatePost';
import Header from '../../components/Header';
import Post from '../../components/Post';

export default function Timeline() {
  return (
    <>
      <Header />
      <PageContainerStyled>
        <MainStyled>
          <TitleH2Styled>timeline</TitleH2Styled>
          <CreatePost />
          <PostsUlStyled>
            <li>
              <Post
                userName="Juvenal Juvêncio"
                userImageUrl="https://t.ctcdn.com.br/zchZha9msNRJoTyopHRHTgEJ5Iw=/1056x594/smart/i603337.jpeg"
                description="Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material"
                url="https://www.npmjs.com/package/url-metadata"
              />
            </li>
          </PostsUlStyled>
        </MainStyled>
      </PageContainerStyled>
    </>
  );
}
