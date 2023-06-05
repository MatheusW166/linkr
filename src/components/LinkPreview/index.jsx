import React, { useEffect, useState } from 'react';
import scrapUrl from '../../services/scraper/scraper.services';
import LinkPreviewStyled from './styled';

const storedPreviews = {};

export default function LinkPreview({ url }) {
  const [preview, setPreview] = useState(storedPreviews[url]);

  useEffect(() => {
    if (!url || storedPreviews[url]) {
      return;
    }
    scrapUrl({ url })
      .then((prev) => {
        setPreview(prev);
        storedPreviews[url] = prev;
      })
      .catch(() => setPreview(null));
  }, []);

  return (
    <LinkPreviewStyled href={url} target="_blank">
      <div>
        {preview?.title && <h3>{preview.title}</h3>}
        {preview?.description && <p>{preview.description}</p>}
        <small>{url}</small>
      </div>
      {preview?.icon && <img alt={preview?.title} src={preview.icon} />}
    </LinkPreviewStyled>
  );
}
