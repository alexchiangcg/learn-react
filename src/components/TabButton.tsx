

import { ReactNode, MouseEventHandler } from 'react';

interface TabButtonProps {
  readonly children: ReactNode;
  readonly onSelect: MouseEventHandler<HTMLButtonElement>;
  readonly isSelected: boolean;
}

export default function TabButton({
  children,
  onSelect,
  isSelected,
}: TabButtonProps) {

  return (
    <li>
      <button className={isSelected?'active':''} onClick={onSelect}>{children}</button>

    </li>
  );
}
