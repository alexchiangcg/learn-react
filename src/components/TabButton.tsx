import { ReactNode } from "react";

interface TabButtonProps {
  readonly children: ReactNode;
  readonly isSelected: boolean;
  readonly onClick: () => void;
}

export default function TabButton({
  children,
  isSelected,
  ...props
}: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
