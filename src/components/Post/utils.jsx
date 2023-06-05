import React from 'react';
import { Link } from 'react-router-dom';

export default function highlightHashtags(text) {
  if (!text?.trim()) return '';
  return text.split(' ').map((word, idx) => {
    if (word[0] === '#') {
      const hashtag = word.substring(1);
      return (
        <Link to={`/hashtag/${hashtag}`}>
          <strong key={idx}>
            {` #${hashtag} `}
          </strong>
        </Link>
      );
    }
    return ` ${word} `;
  });
}
