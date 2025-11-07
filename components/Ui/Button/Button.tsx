import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  className?: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, text, type = "button", ...rest }: ButtonProps) => {
  return (
    <button className={className} type={type} {...rest}>
      {text}
    </button>
  );
};

export default Button;
