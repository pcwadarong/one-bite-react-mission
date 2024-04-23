import { colorVariants, getEmotionImage } from '../utils/get-emotion-image';
import clsx from 'clsx';

export default function EmotionItem({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}) {
  const emotionColor = clsx({
    'text-white': isSelected,
    [colorVariants[emotionId]]: isSelected,
    'bg-white': !isSelected,
  });

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg flex flex-col items-center p-3 ${emotionColor}`}
    >
      <img
        src={getEmotionImage(emotionId)}
        alt={emotionName}
        width="50%"
        className="mb-2.5"
      />
      <div>{emotionName}</div>
    </div>
  );
}
