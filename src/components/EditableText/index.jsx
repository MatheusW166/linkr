import React, { useRef } from 'react';
import EditableTextStyled from './styled';

export default function EditableText({
  isEditing,
  text,
  defaultInputValue,
  onEnter,
  onEscape,
  disabled = false,
}) {
  const textRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && onEscape) onEscape(event);
    if (event.key === 'Enter' && onEnter) {
      event.preventDefault();
      onEnter(event);
    }
  };

  if (!isEditing) return <p ref={textRef}>{text}</p>;

  return (
    <EditableTextStyled
      disabled={disabled}
      placeholder="Digite aqui..."
      autoFocus
      defaultValue={defaultInputValue}
      height={textRef.current?.clientHeight}
      onKeyDown={handleKeyDown}
    />
  );
}
