import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegShareSquare } from 'react-icons/fa';
import Context from '../../Context';
import RepostBadgeStyled from './styled';

export default function RepostBadge({ repostUserName, repostUserId }) {
  const { user: loggedUser } = useContext(Context);
  const repostedByMe = loggedUser.id === repostUserId;

  const message = `${repostedByMe ? 'you' : repostUserName}`;

  return (
    <RepostBadgeStyled className="repost-badge">
      <div>
        <FaRegShareSquare />
        <span>
          Re-posted by
          {' '}
          <Link to={`/user/${repostUserId}`}>
            <strong>{message}</strong>
          </Link>
        </span>
      </div>
    </RepostBadgeStyled>
  );
}
