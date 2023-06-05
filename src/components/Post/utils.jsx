import React from 'react';
import { Link } from 'react-router-dom';

export default function highlightHashtags(text) {
  if (!text?.trim()) return '';
  return text.split(' ').map((word, idx) => {
    if (word[0] === '#') {
      const hashtag = word.substring(1);
      return (
        <Link key={idx} to={`/hashtag/${hashtag}`}>
          <strong>
            {` #${hashtag} `}
          </strong>
        </Link>
      );
    }
    return ` ${word} `;
  });
}
