import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

export default function Edit() {
  const params = useParams();
  return <div>{params.id}번 일기입니다.</div>;
}
