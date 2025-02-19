import { ReactNode } from "react";

interface SectionProps {
  readonly children: ReactNode;
  readonly title: string;
  readonly id: string;
}

export default function Section({ children, title, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
