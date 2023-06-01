/* eslint-disable no-console */
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

export function PostLinkPreview({ url }) {
  // const [preview, setPreview] = useState();

  const preview = {};

  // useEffect(() => {
  //   if (!url) {
  //     return;
  //   }
  //   scrapUrl({ url })
  //     .then(setPreview)
  //     .catch(() => setPreview(null));
  // }, []);

  return (
    <PostLinkPreviewStyled href={url} target="_blank">
      <div>
        {preview?.title && <h3>{preview.title}</h3>}
        {preview?.description && <p>{preview?.description}</p>}
        <small>{url}</small>
      </div>
      {preview?.icon && <img alt="url-img" src={preview.icon} />}
    </PostLinkPreviewStyled>
  );
}
