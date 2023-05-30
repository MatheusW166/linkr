import React from 'react';
import { PostStyled, PostLinkPreviewStyled } from './styled';
import { UserAvatarStyled } from '../../styled';

export default function Post({
  userName,
  userImageUrl,
  description,
  // url,
}) {
  // useEffect(() => {
  //   if (!url) {
  //     return;
  //   }
  //   urlMetadata(url).then(console.log).catch(console.log);
  // }, []);

  return (
    <PostStyled>
      <UserAvatarStyled src={userImageUrl} alt="avatar" />
      <div>
        <p>{userName}</p>
        <p>{description}</p>
        <PostLinkPreview />
      </div>
    </PostStyled>
  );
}

export function PostLinkPreview({
  title,
  description,
  url,
  imageUrl,
}) {
  return (
    <PostLinkPreviewStyled>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{url}</small>
      </div>
      <img alt="url-img" src={imageUrl} />
    </PostLinkPreviewStyled>
  );
}
