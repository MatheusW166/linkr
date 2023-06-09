import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PostActions from '../PostActions';
import EditableText from '../EditableText';
import PostStyled from './styled';
import { UserAvatarStyled } from '../../styled';
import highlightHashtags from './utils';
import LinkPreview from '../LinkPreview';
import { useMutation } from '../../hooks/request.hooks';
import { editPost } from '../../services/api/posts.services';
import Likes from '../Likes';
import Context from '../../Context';
import RepostBadge from '../RepostBadge';
import Reposts from '../Reposts';

export default function Post({
  postId,
  userName,
  userImageUrl,
  userId,
  url,
  refreshPosts,
  repostUserName,
  repostUserId,
  repostCount,
  description: rawDescription,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { user: loggedUser } = useContext(Context);
  const isPostOwner = loggedUser?.id === userId;

  const {
    mutate: editUserPost,
    loading: loadingEdit,
  } = useMutation(editPost);

  const closeEdition = () => setIsEditing(false);
  const toggleEdition = () => setIsEditing(!isEditing);

  const handleEdit = (event) => {
    const editedText = event.target.value?.trim();
    if (editedText === rawDescription) {
      closeEdition();
      return;
    }
    editUserPost({
      postId,
      url,
      description: editedText,
      onSuccess: () => {
        closeEdition();
        refreshPosts();
      },
      onError: () => {
        alert('Unable to edit post');
      },
    });
  };

  const postDescription = highlightHashtags(rawDescription);
  const isRepost = repostUserId !== null;

  return (
    <PostStyled isRepost={isRepost} data-test="post">
      {isRepost && (
        <RepostBadge
          repostUserId={repostUserId}
          repostUserName={repostUserName}
        />
      )}
      {isPostOwner && (
        <PostActions
          onClickEdit={toggleEdition}
          onDeleteSuccess={refreshPosts}
          postId={postId}
        />
      )}
      <div className="post-reactions">
        <UserAvatarStyled src={userImageUrl} alt="avatar" />
        <Likes postId={postId} />
        <Reposts
          postId={postId}
          onRepostSuccess={refreshPosts}
          repostCount={repostCount}
        />
      </div>
      <div>
        <Link data-test="username" to={`/user/${userId}`}>
          {userName}
        </Link>
        <EditableText
          text={postDescription}
          defaultInputValue={rawDescription}
          isEditing={isEditing}
          onEscape={closeEdition}
          onEnter={handleEdit}
          disabled={loadingEdit}
        />
        <LinkPreview url={url} />
      </div>
    </PostStyled>
  );
}
