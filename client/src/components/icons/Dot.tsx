import { FC } from "react";

interface Props {
  className?: string;
  size?: string;
  color?: string;
}

export const Dot: FC<Props> = ({ className, size, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || "16"}
      height={size || "16"}
      fill={color || "currentColor"}
      className={className || "bi-dot"}
      viewBox='0 0 16 16'
    >
      <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
    </svg>
  );
};
