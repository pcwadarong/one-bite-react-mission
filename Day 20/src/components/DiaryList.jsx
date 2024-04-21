import Button from './Button';
import DiaryItem from './DiaryItem';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';

const DiaryList = () => {
  const data = useContext(DiaryStateContext);
  return (
    <div className="py-5">
      <div className="flex justify-between mb-5 ">
        <select className="bg-transparent p-2 -ml-2 mr-4 cursor-pointer ">
          <option value="latest">최신 순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button text={'새 일기쓰기'} color={'green'} additional={'flex-1'} />
      </div>
      <div>
        {data.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
