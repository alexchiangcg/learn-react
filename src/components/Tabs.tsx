export default function Tabs({
  children,
  buttons,
}: Readonly<{
  children: React.ReactNode;
  buttons: React.ReactNode;
}>) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
