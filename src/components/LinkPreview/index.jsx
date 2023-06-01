/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import scrapUrl from '../../services/scraper/scraper.services';
import LinkPreviewStyled from './styled';

export default function LinkPreview({ url }) {
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!url) {
      return;
    }
    // scrapUrl({ url })
    //   .then(setPreview)
    //   .catch(() => setPreview(null));
  }, []);

  return (
    <LinkPreviewStyled href={url} target="_blank">
      <div>
        {preview?.title && <h3>{preview.title}</h3>}
        {preview?.description && <p>{preview.description}</p>}
        <small>{url}</small>
      </div>
      {preview?.icon && <img alt="url-img" src={preview.icon} />}
    </LinkPreviewStyled>
  );
}
