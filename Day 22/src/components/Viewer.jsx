import { getEmotionImage } from '../utils/get-emotion-image';
import { emotionList, colorVariants } from '../utils/constants';

export default function Viewer({ emotionId, content }) {
  const emotionItem = emotionList.find((item) => item.emotionId === emotionId);
  const emotionColor = colorVariants[emotionId];

  return (
    <div>
      <section className={`flex flex-col items-center mt-3`}>
        <h4 className="title">오늘의 감정</h4>
        <div
          className={`rounded-lg flex flex-col items-center p-5 ${emotionColor}`}
        >
          <img
            className="w-3/4"
            src={getEmotionImage(emotionId)}
            alt="emotionImg"
          />
          <div className="text-white">{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className={`flex flex-col items-center mt-7`}>
        <h4 className="title">오늘의 일기</h4>
        <div className="bg-white rounded-lg break-all p-6 leading-relaxed w-full">
          {content}
        </div>
      </section>
    </div>
  );
}
