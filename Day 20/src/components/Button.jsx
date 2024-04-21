import clsx from 'clsx';

const Button = ({ text, color, isRound, additional }) => {
  const btnType = clsx({
    'bg-gray-300 text-gray-500': color !== 'green' && color !== 'red',
    'bg-green-600 text-white': color === 'green',
    'border-2 border-red-400 text-red-400': color === 'red',
  });

  const btnRound =
    isRound === 'isRound'
      ? 'rounded-full border-2 border-gray-500 w-6 h-6 leading-6 bg-transparent'
      : 'rounded-md py-2.5 px-3';


  return (
    <button
      className={`cursor-pointer text-lg whitespace-nowrap ${btnType} ${btnRound} ${additional}`}
    >
      {text}
    </button>
  );
};

export default Button;
