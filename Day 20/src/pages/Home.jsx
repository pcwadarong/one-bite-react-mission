import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

export default function Home() {
  return (
    <div>
      <Header
        title={'4월'}
        leftChild={<Button text={'<'} isRound={'isRound'}/>}
        rightChild={<Button text={'>'} isRound={'isRound'}/>}
      />
      <DiaryList />
    </div>
  );
}
