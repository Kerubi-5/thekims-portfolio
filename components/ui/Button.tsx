import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button
      className={`p-3 bg-purple-400 hover:bg-purple-600 text-white hover:scale-105 transition-all${
        !!className ? " " + className : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
