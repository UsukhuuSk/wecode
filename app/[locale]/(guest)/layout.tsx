import { FloatingHeader } from "../../../components/Nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="">
        <FloatingHeader />
      </div>
      {children}
    </div>
  );
}
