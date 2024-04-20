import clsx from 'clsx';

const Button = ({ text, color, className }) => {
  const btnClass = clsx({
    'bg-gray-200 text-gray-600': color !== 'green' && color !== 'red',
    'bg-green-500 text-white': color === 'green',
    'bg-red-200 text-rose-600': color === 'red',
  });
  return (
    <button
      className={`cursor-pointer rounded-md py-2.5 px-2.5 text-lg whitespace-nowrap ${btnClass} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
