import { getEmotionImage } from '../utils/get-emotion-image';
import { emotionList } from '../utils/constants'

export default function Viewer() {
  const emotionId = 3;
  const emotionItem = emotionList.find((item)=> item.emotionId === emotionId)

  return (
    <div>
      <section className=''>
        <h4>오늘의 감정</h4>
        <div>
          <img src={getEmotionImage(emotionId)} alt="emotionImg" />

        </div>
      </section>
      <section></section>
    </div>
  );
}
