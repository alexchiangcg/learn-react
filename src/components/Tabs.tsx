export default function Tabs({
  children,
  buttons,
  ButtonContainer = "menu",
}: Readonly<{
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonContainer?: "menu" | "div" | "ul" | "ol";
}>) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
