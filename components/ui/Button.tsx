import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button className={`p-3 ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
