import React from 'react';

export default function highlightHashtags(text) {
  if (!text?.trim()) return '';
  return text.split(' ').map((word, idx) => {
    if (word[0] === '#') {
      return <strong key={idx}>{` ${word} `}</strong>;
    }
    return ` ${word} `;
  });
}
