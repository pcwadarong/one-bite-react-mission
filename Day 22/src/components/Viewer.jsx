import { getEmotionImage } from '../utils/get-emotion-image';
import { emotionList, colorVariants } from '../utils/constants';

export default function Viewer() {
  const emotionId = 3;
  const emotionItem = emotionList.find((item) => item.emotionId === emotionId);
  const emotionColor = colorVariants[emotionId];
  return (
    <div>
      <section className={`flex flex-col items-center mt-3`}>
        <h4 className='title'>오늘의 감정</h4>
        <div className={`rounded-lg flex flex-col items-center p-5 ${emotionColor}`}>
          <img className='w-3/4' src={getEmotionImage(emotionId)} alt="emotionImg" />
          <div className='text-white'>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className={`flex flex-col items-center mt-7`}>
        <h4 className='title'>오늘의 일기</h4>
        <div className='bg-gray-300 rounded-lg break-all p-6 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab illum maiores libero facere enim possimus fugit nulla excepturi suscipit animi ipsum odit soluta dignissimos doloribus molestias quis, fuga quos.
        </div>
      </section>
    </div>
  );
}
