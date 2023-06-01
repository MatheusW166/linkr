/* eslint-disable no-alert */
import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { PostActionsStyled, PostStyled } from './styled';
import { UserAvatarStyled } from '../../styled';
import highlightHashtags from './utils';
import LinkPreview from '../LinkPreview';
import ModalCustom from '../ModalCustom';
import { useMutation } from '../../hooks/request.hooks';
import { deletePost } from '../../services/api/posts.services';

export default function Post({
  postId,
  userName,
  userImageUrl,
  userId,
  description,
  url,
  refreshPosts,
}) {
  const [isModalOpen, setIsOpen] = useState(false);

  const {
    mutate: deleteUserPost,
    loading: loadingDelete,
  } = useMutation(deletePost);

  const loggedUserId = 3;
  const isPostOwner = loggedUserId === userId;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = () => {
    deleteUserPost({
      postId,
      onSuccess: () => {
        closeModal();
        refreshPosts();
      },
      onError: () => {
        closeModal();
        alert('Unable to delete post');
      },
    });
  };

  return (
    <>
      <ModalCustom
        title="Are you sure you want to delete this post?"
        confirmText="Yes, delete it"
        cancelText="No, go back"
        onConfirm={handleDelete}
        onCancel={closeModal}
        isOpen={isModalOpen}
        isLoading={loadingDelete}
      />
      <PostStyled>
        {isPostOwner && (
          <PostActionsStyled>
            <MdEdit />
            <AiFillDelete onClick={openModal} />
          </PostActionsStyled>
        )}
        <UserAvatarStyled src={userImageUrl} alt="avatar" />
        <div>
          <p>{userName}</p>
          <p>{highlightHashtags(description)}</p>
          <LinkPreview url={url} />
        </div>
      </PostStyled>
    </>
  );
}
