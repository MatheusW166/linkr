/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PostStyled, PostLinkPreviewStyled } from './styled';
import { UserAvatarStyled } from '../../styled';

export function accentHashtagsParser(text) {
  if (!text?.trim()) return '';
  return text.split(' ').map((word, idx) => {
    if (word[0] === '#') {
      return <strong key={idx}>{` ${word} `}</strong>;
    }
    return ` ${word} `;
  });
}

export default function Post({
  userName,
  userImageUrl,
  description,
  url,
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
        <p>{accentHashtagsParser(description)}</p>
        <PostLinkPreview url={url} />
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
    <PostLinkPreviewStyled href={url} target="_blank">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{url}</small>
      </div>
      <img alt="url-img" src={imageUrl} />
    </PostLinkPreviewStyled>
  );
}
