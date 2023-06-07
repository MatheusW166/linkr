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

  const moveCursorEnd = (event) => {
    const input = event.target;
    const textLength = input.value?.length;
    input.setSelectionRange(textLength, textLength);
  };

  if (!isEditing) {
    return <p data-test="description" ref={textRef}>{text}</p>;
  }

  return (
    <EditableTextStyled
      onFocus={moveCursorEnd}
      disabled={disabled}
      placeholder="Digite aqui..."
      autoFocus
      defaultValue={defaultInputValue}
      height={textRef.current?.clientHeight}
      onKeyDown={handleKeyDown}
      data-test="edit-input"
    />
  );
}
