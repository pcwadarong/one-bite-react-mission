import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import DiaryItem from './DiaryItem';

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState('latest');
  const nav = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  //원본 데이터를 수정하지 않고 . 새 배열 반환
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'oldest') {
        return Number(a.createdDate - b.createdDate);
      } else {
        return Number(b.createdDate - a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="py-5">
      <div className="flex justify-between mb-5 ">
        <select
          onChange={onChangeSortType}
          className="bg-transparent p-2 -ml-2 mr-4 cursor-pointer "
        >
          <option value="latest">최신 순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button
          onClick={() => nav(`/New`)}
          text={'새 일기쓰기'}
          color={'green'}
          additional={'flex-1'}
        />
      </div>
      <div>
        {sortedData.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
