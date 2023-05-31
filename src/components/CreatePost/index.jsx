import React from 'react';
import { PrimaryButtonStyled, UserAvatarStyled } from '../../styled';
import {
  CreatePostFormStyled,
  CreatePostInputStyled,
  CreatePostStyled,
  CreatePostTextAreaStyled,
} from './styled';

export default function CreatePost() {
  return (
    <CreatePostStyled>
      <UserAvatarStyled
        src="https://t.ctcdn.com.br/zchZha9msNRJoTyopHRHTgEJ5Iw=/1056x594/smart/i603337.jpeg"
        alt="avatar"
      />
      <div>
        <p>What are you going to share today?</p>
        <CreatePostFormStyled>
          <CreatePostInputStyled placeholder="http://..." type="url" required />
          <CreatePostTextAreaStyled
            placeholder="Type here!"
            rows={4}
            required
          />
          <PrimaryButtonStyled type="submit">Publish</PrimaryButtonStyled>
        </CreatePostFormStyled>
      </div>
    </CreatePostStyled>
  );
}
