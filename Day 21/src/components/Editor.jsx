import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from './Button';
import EmotionItem from './EmotionItem';

const emotionList = [
  { emotionId: 1, emotionName: '완전 좋음' },
  { emotionId: 2, emotionName: '좋음' },
  { emotionId: 3, emotionName: '그럭저럭' },
  { emotionId: 4, emotionName: '나쁨' },
  { emotionId: 5, emotionName: '끔찍함' },
];

export default function Editor() {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const emotionId = 2;

  return (
    <section>
      <section>
        <h4 className="editorTitle">오늘의 날짜</h4>
        <input type="date" className="px-2.5 py-5 text-xl rounded-lg" />
      </section>
      <section>
        <h4 className="editorTitle">오늘의 감정</h4>
        <div className="flex justify-around gap-2">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="editorTitle">오늘의 일기</h4>
        <textarea
          className="p-5 rounded-lg w-full min-h-48 resize-y"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="flex justify-between mt-5 pb-5">
        <Button text={'취소하기'} />
        <Button text={'작성완료'} color={'green'} />
      </section>
    </section>
  );
}
