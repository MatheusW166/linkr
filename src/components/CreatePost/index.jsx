import React from 'react';
import { PrimaryButtonStyled, UserAvatarStyled } from '../../styled';
import {
  CreatePostFormStyled,
  CreatePostInputStyled,
  CreatePostStyled,
  CreatePostTextAreaStyled,
} from './styled';

export default function CreatePost({ onSubmit, loading = false }) {
  return (
    <CreatePostStyled>
      <UserAvatarStyled
        src="https://t.ctcdn.com.br/zchZha9msNRJoTyopHRHTgEJ5Iw=/1056x594/smart/i603337.jpeg"
        alt="avatar"
      />
      <div>
        <p>What are you going to share today?</p>
        <CreatePostFormStyled onSubmit={onSubmit}>
          <CreatePostInputStyled
            name="url"
            placeholder="http://..."
            type="url"
            required
            disabled={loading}
          />
          <CreatePostTextAreaStyled
            name="description"
            placeholder="Type here!"
            rows={4}
            disabled={loading}
          />
          <PrimaryButtonStyled disabled={loading} type="submit">
            {loading ? 'Publishing...' : 'Publish'}
          </PrimaryButtonStyled>
        </CreatePostFormStyled>
      </div>
    </CreatePostStyled>
  );
}
