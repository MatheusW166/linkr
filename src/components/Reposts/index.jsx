import React, { useState } from 'react';
import { FaRegShareSquare } from 'react-icons/fa';
import RepostsStyled from './styled';
import ModalCustom from '../ModalCustom';
import { useMutation } from '../../hooks/request.hooks';
import { repost } from '../../services/api/posts.services';

export default function Reposts({ postId, repostCount, onRepostSuccess }) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, loading } = useMutation(repost);

  const handleRepost = () => {
    mutate({
      postId,
      onSuccess: () => {
        setIsOpen(false);
        onRepostSuccess();
      },
      onError: (err) => {
        alert(err.response?.data ?? 'There was an error sharing this link');
      },
    });
  };

  return (
    <>
      <ModalCustom
        title="Do you want to re-post this link?"
        confirmText="Yes, share!"
        cancelText="No, cancel"
        onConfirm={handleRepost}
        onCancel={() => setIsOpen(false)}
        isOpen={isOpen}
        isLoading={loading}
      />
      <RepostsStyled id={postId} onClick={() => setIsOpen(true)}>
        <FaRegShareSquare />
        {`${repostCount} ${repostCount !== 1 ? 're-posts' : 're-post'}`}
      </RepostsStyled>
    </>
  );
}
