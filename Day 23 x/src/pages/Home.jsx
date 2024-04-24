import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import usePageTitle from '../hooks/usePageTitle';

const getMonthlyData = (pivotDate, data) => {
  // 이번 달의 시작 시각과 끝 시각
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

export default function Home() {
  usePageTitle('감정 일기장');
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);

  const monthlyData = getMonthlyData(pivotDate, data);

  const onChangeMonth = (change) => {
    if (change === '<') {
      setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    } else {
      setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={
          <Button
            text={'<'}
            isRound={true}
            onClick={() => onChangeMonth('<')}
          />
        }
        rightChild={
          <Button
            text={'>'}
            isRound={true}
            onClick={() => onChangeMonth('>')}
          />
        }
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}
