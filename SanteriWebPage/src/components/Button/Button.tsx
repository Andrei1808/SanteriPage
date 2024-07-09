import  { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  callback?: (id: string) => void;
}

export default function Button({
  children,
  disabled,
  className,
  callback,
  type,
}: ButtonProps) {

  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      onClick={() => callback}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  classes: null,
  callback: undefined,
  type: "button",
};
