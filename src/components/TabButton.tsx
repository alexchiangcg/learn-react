import { ReactNode,ButtonHTMLAttributes } from "react";

/* ButtonHTMLAttributes<HTMLButtonElement>：
這裡的 ButtonHTMLAttributes<HTMLButtonElement> 是 React 提供的一個內建型別，包含了所有 <button> 元素可以使用的屬性。例如：onClick, disabled, type 等。它的作用是讓我們在 TabButtonProps 裡面，繼承 <button> 元素的所有常見屬性。

HTMLButtonElement：
HTMLButtonElement 是 指定 <button> 元素的具體型別，讓 TypeScript 知道 ButtonHTMLAttributes 是應該應用於 <button> 元素的。這樣，當你在 TabButton 組件中使用 onClick 等事件屬性時，TypeScript 能夠正確推斷事件物件的型別，並進行型別檢查。

extends ButtonHTMLAttributes<HTMLButtonElement>：
這表示 TabButtonProps 繼承了 <button> 元素的所有屬性，所以你可以在 TabButton 組件中使用所有 <button> 屬性

---------------------
ButtonHTMLAttributes<T>	React 內建泛型 interface，用來定義 <input> 可用的屬性
HTMLButtonElement	原生 DOM API 型別，代表 <input> HTML 元素


*/


// ButtonHTMLAttributes 是 React 提供的一個內建型別， 
// 繼承 ButtonHTMLAttributes 的 interface 裡面的屬性，然後 <HTMLButtonElement> 是為了告訴 ts 指定給 button 用
interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly isSelected: boolean;
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
