/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostStyled, PostLinkPreviewStyled } from './styled';
import { UserAvatarStyled, UserNameStyled } from '../../styled';
import scrapUrl from '../../services/scraper/scraper.services';

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
  userId,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <PostStyled>
      <UserAvatarStyled onClick={handleClick} style={{ cursor: 'pointer' }} src={userImageUrl} alt="avatar" />
      <div>
        <UserNameStyled onClick={handleClick} style={{ cursor: 'pointer' }}>{userName}</UserNameStyled>
        <p>{accentHashtagsParser(description)}</p>
        <PostLinkPreview url={url} />
      </div>
    </PostStyled>
  );
}

export function PostLinkPreview({ url }) {
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!url) {
      return;
    }
    scrapUrl({ url })
      .then(setPreview)
      .catch(() => setPreview(null));
  }, []);

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
