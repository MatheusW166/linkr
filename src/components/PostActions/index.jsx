import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import PostActionsStyled from './styled';
import ModalCustom from '../ModalCustom';
import { useMutation } from '../../hooks/request.hooks';
import { deletePost } from '../../services/api/posts.services';

export default function PostActions({
  postId,
  onDeleteSuccess,
  onClickEdit,
}) {
  const [isModalOpen, setIsOpen] = useState(false);
  const {
    mutate: deleteUserPost,
    loading: loadingDelete,
  } = useMutation(deletePost);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = () => {
    deleteUserPost({
      postId,
      onSuccess: () => {
        closeModal();
        onDeleteSuccess();
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
      <PostActionsStyled>
        <MdEdit data-test="edit-btn" onClick={onClickEdit} />
        <AiFillDelete data-test="delete-btn" onClick={openModal} />
      </PostActionsStyled>
    </>
  );
}
