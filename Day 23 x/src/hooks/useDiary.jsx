import { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function useDiary(id) {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id),
    );
    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return currentItem;
}
