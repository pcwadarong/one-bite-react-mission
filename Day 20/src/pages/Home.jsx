import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

export default function Home() {
  return (
    // DiaryList
    <div>
      <Header
        title={'4월'}
        leftChild={<Button text={'<'} className={'px-6'} />}
        rightChild={<Button text={'>'} className={'px-6'} />}
      />
      <DiaryList />
    </div>
  );
}
