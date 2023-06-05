import React, { useContext } from 'react';
import { PrimaryButtonStyled, UserAvatarStyled } from '../../styled';
import {
  CreatePostFormStyled,
  CreatePostInputStyled,
  CreatePostStyled,
  CreatePostTextAreaStyled,
} from './styled';
import Context from '../../Context';

export default function CreatePost({ onSubmit, loading = false }) {
  const { user } = useContext(Context);

  return (
    <CreatePostStyled data-test="publish-box">
      <UserAvatarStyled
        src={user?.photo}
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
            data-test="link"
          />
          <CreatePostTextAreaStyled
            name="description"
            placeholder="Type here!"
            rows={4}
            disabled={loading}
            data-test="description"
          />
          <PrimaryButtonStyled data-test="publish-btn" disabled={loading} type="submit">
            {loading ? 'Publishing...' : 'Publish'}
          </PrimaryButtonStyled>
        </CreatePostFormStyled>
      </div>
    </CreatePostStyled>
  );
}
