import React from 'react'

export type ButtonTypes = 'primary' | 'secondary';

interface ButtonProps {
  btnType: ButtonTypes;
  label?: string;
  disabled?: boolean;
}

const primaryButtonClass = 'bg-red-600 text-white py-2 px-4 rounded border border-red-600 cursor-pointer hover:bg-red-400 disabled:opacity-25 disabled:bg-red-600';
const secondaryButtonClass = 'bg-white text-red-600 py-2 px-4 rounded border border-red-600 cursor-pointer hover:bg-red-400 hover:text-white disabled:opacity-25 disabled:bg-white disabled:text-red-600';

const buttonTypeSwitcher = (type: ButtonTypes) => {
  switch (type) {
    case 'primary':
      return primaryButtonClass;
    case 'secondary':
      return secondaryButtonClass;
    default:
      return primaryButtonClass;
  }
}

export const Button: React.FC<ButtonProps> = ({btnType, label = 'Click me', disabled}) => {
  const clickHandler = () => {
    console.log('clicked!');
  };

  return (
    <button
      className={buttonTypeSwitcher(btnType)}
      onClick={clickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  )
};

export default Button;