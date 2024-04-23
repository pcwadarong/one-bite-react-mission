import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import EmotionItem from './EmotionItem';
import { emotionList } from '../utils/constants'

const getStringDate = (targetDate) => {
  // date => yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = String(targetDate.getMonth() + 1).padStart(2, '0');
  let date = String(targetDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
};

export default function Editor({ initData, onSubmit }) {
  const textareaRef = useRef();
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    if (name === 'createdDate') {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    if (textareaRef.current.value === '') {
      textareaRef.current.focus();
    } else {
      onSubmit(input);
    }
  };

  return (
    <section>
      <section>
        <h4 className="title">오늘의 날짜</h4>
        <input
          name="createdDate"
          value={getStringDate(input.createdDate)}
          type="date"
          className="px-2.5 py-5 text-xl rounded-lg"
          onChange={onChangeInput}
        />
      </section>
      <section>
        <h4 className="title">오늘의 감정</h4>
        <div className="flex justify-around gap-2">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: { name: 'emotionId', value: item.emotionId },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="title">오늘의 일기</h4>
        <textarea
          className="p-5 rounded-lg w-full min-h-48 resize-y"
          name="content"
          id=""
          cols="30"
          rows="10"
          value={input.content}
          ref={textareaRef}
          placeholder="오늘은 어땠나요?"
          onChange={onChangeInput}
        ></textarea>
      </section>
      <section className="flex justify-between mt-5 pb-5">
        <Button text={'취소하기'} onClick={() => nav(-1)} />
        <Button
          text={'작성완료'}
          color={'green'}
          onClick={onClickSubmitButton}
        />
      </section>
    </section>
  );
}
