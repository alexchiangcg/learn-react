import { ReactNode ,HTMLAttributes} from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  readonly children: ReactNode;
  readonly title: string;
}

export default function Section({ children, title, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
