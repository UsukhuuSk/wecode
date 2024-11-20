import { FloatingHeader } from "../../../components/Nav";
import Sidebar from "../../../components/Sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}

// <div className="">
//   <div className="flex flex-col h-screen">
//     <div className="fixed top-0 left-0 right-0 z-10">
//       <FloatingHeader />
//     </div>
//     {/* <div className="flex flex-grow">
//       <Sidebar className="w-1/4 min-w-[200px] max-w-[248px]" />

//       <main className="flex-grow">{children}</main>
//     </div> */}
//     <div className="flex flex-grow pt-[84px]">
//       {" "}
//       <div className="fixed top-[84px] left-0 h-screen min-w-[248px] bg-[#141B34]">
//         <Sidebar />
//       </div>
//       <main className="ml-[248px] w-full  ">{children}</main>
//     </div>
//   </div>
// </div>
