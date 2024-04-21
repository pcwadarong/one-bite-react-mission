import clsx from 'clsx';

const Button = ({ text, color, className }) => {
  const btnClass = clsx({
    'bg-gray-300 text-gray-500': color !== 'green' && color !== 'red',
    'bg-green-600 text-white': color === 'green',
    'border-2 border-rose-400 text-rose-400': color === 'red',
  });
  return (
    <button
      className={`cursor-pointer rounded-md py-2.5 px-3 text-lg whitespace-nowrap ${btnClass} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
