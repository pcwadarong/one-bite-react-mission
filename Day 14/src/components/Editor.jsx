import { useState, useRef } from 'react';

export default function Editor({ onCreate }) {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onChangeInput = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current.focus();
    } else {
      onCreate(content);
      setContent('');
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="새로운 todo..."
        onChange={onChangeInput}
      />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}
