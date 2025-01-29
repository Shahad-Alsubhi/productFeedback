import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customStyle?: string;
}
const Button = ({
  children,
  onClick,
  customStyle,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`rounded-xl text-sm font-bold text-white hover:text-[#F2F4FE] px-6 py-3 ${customStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
