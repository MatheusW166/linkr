import React from 'react';
import Modal from 'react-modal';
import {
  LoaderStyled,
  PrimaryButtonStyled,
  SecondaryButtonStyled,
  TitleH3Styled,
} from '../../styled';
import ModalActionsStyled from './styled';

const modalStyles = {
  content: {
    background: '#333',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    padding: '24px',
    height: 'fit-content',
    width: 'fit-content',
    minWidth: '300px',
    maxWidth: '600px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
};

export default function ModalCustom({
  title,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  isLoading = false,
  isOpen = false,
}) {
  return (
    <Modal style={modalStyles} isOpen={isOpen}>
      <TitleH3Styled>{title}</TitleH3Styled>
      <ModalActionsStyled>
        <SecondaryButtonStyled
          disabled={isLoading}
          type="button"
          onClick={onCancel}
        >
          {cancelText}
        </SecondaryButtonStyled>
        <PrimaryButtonStyled
          disabled={isLoading}
          type="button"
          onClick={onConfirm}
        >
          {isLoading ? <LoaderStyled /> : confirmText}
        </PrimaryButtonStyled>
      </ModalActionsStyled>
    </Modal>
  );
}
