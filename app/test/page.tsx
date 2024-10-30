import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import unicef from "../assets/unicef.svg";
import golomt from "../assets/golomt.svg";
import brain from "../assets/brain-02.svg";
import coding from "../assets/code-circle.svg";
import help from "../assets/help-circle.svg";
// import bg from "../assets/bg.png";
import star from "../assets/stars.png";
import star2 from "../assets/stars2.png";
import star3 from "../assets/stars3.png";
import certicates from "../assets/certificate.png";
import certicates2 from "../assets/certificate2.svg";
import graph from "../assets/graph.svg";
import cardgrad from "../assets/cardgrad.png";
import star4 from "../assets/comingsoonstars.png";
import { FaPlay, FaApple } from "react-icons/fa";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import phone from "../assets/phone.png";
import first from "../assets/LandingPage/1.svg";
import second from "../assets/LandingPage/2.svg";
import third from "../assets/LandingPage/3.svg";
import fourth from "../assets/LandingPage/4.svg";
import fifth from "../assets/LandingPage/5.svg";
import sixth from "../assets/LandingPage/6.svg";
import seventh from "../assets/LandingPage/7.svg";
import eight from "../assets/LandingPage/8.svg";
import nine from "../assets/LandingPage/9.svg";
import ten from "../assets/LandingPage/10.svg";
import eleven from "../assets/LandingPage/11.svg";
import twelve from "../assets/LandingPage/12.svg";
import bg from "../assets/LandingPage/background.png";
import fullcircle from "../assets/LandingPage/fullcircle.png";
import opencircle from "../assets/LandingPage/opencircle.png";
import shadow from "../assets/LandingPage/shadow.svg";

export default function Page() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      // image: "",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      // image: "",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      // image: "",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      // image: "",
    },
  ];
  return (
    <>
      <div className="px-4 m-0 relative rounded-3xl h-screen">
        <div className="absolute -z-50">
          <Image src={bg} alt="" />
        </div>
        <div className="absolute right-1/2 top-[15%] translate-x-1/2 translate-y-1/3">
          <div className="flex flex-col justify-between items-center gap-12 ">
            <div className=" absolute left-0 ">
              <div className="flex items-center gap-3">
                <Image src={first} alt="" />
                <Image src={second} alt="" />
                <Image src={third} alt="" />
              </div>
            </div>
            <div className="absolute right-0">
              <div className="flex items-center gap-3">
                <Image src={fourth} alt="" />
                <Image src={fifth} alt="" />
                <Image src={sixth} alt="" />
              </div>
            </div>
            <div className="absolute right-0 bottom-0">
              <div className="flex items-center gap-3">
                <Image src={seventh} alt="" />
                <Image src={eight} alt="" />
                <Image src={nine} alt="" />
              </div>
            </div>
            <div className="absolute left-0 bottom-0">
              <div className="flex items-center gap-3">
                <Image src={seventh} alt="" />
                <Image src={eight} alt="" />
                <Image src={nine} alt="" />
              </div>
            </div>
            <div className="m-auto absolute flex justify-center">
              <div className="flex items-center gap-6 py-2 px-4 rounded-[32px] bg-[#150A32] border border-[#00FF9D]">
                <div className="flex flex-row items-center justify-center">
                  {people.map((item) => (
                    <div className="-mr-3" key={item.name}>
                      <Image
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="object-cover !m-0 !p-0 object-top rounded-full  h-8 w-8"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex justify-center items-start gap-1 ">
                    <span className="text-xs font-extrabold font-manrope text-white">
                      4.5
                    </span>
                    <div className="flex ">
                      <IoIosStar size={14} color="#FFCC15" />
                      <IoIosStar size={14} color="#FFCC15" />
                      <IoIosStar size={14} color="#FFCC15" />
                      <IoIosStar size={14} color="#FFCC15" />
                      <IoIosStar size={14} color="#FFCC15" />
                    </div>
                  </div>
                  <div className=" text-[#FFFFFF99] font-manrope text-center font-semibold">
                    1200+ сурагчид
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="gradtext ovsoge text-[40px] lg:text-[72px] font-bold">
                AI FOR ALL
              </span>
              {/* <span className="ovsoge text-white text-[40px] lg:text-[72px] font-extrabold">
              the Next
            </span>
            <div className="ovsoge text-white text-[40px] lg:text-[72px] font-extrabold">
              Generation
            </div> */}
              {/* <span className="gradtext font-montserratAlt text-[40px] lg:text-[72px] font-extrabold">
              кодчлолын
            </span> */}
              {/* <span className="gradtext font-montserratAlt text-[40px] font-extrabold ">
          Хиймэл оюун, кодчлолын
          </span> */}
            </div>
            <div className="flex justify-center gap-12">
              {/* <Image src={first} alt="" />
            <Image src={second} alt="" />
            <Image src={third} alt="" />
            <Image src={fourth} alt="" />
            <Image src={fifth} alt="" />
            <Image src={sixth} alt="" /> */}
              <Image src={seventh} alt="" />
              <Image src={eight} alt="" />
              <Image src={nine} alt="" />
              <Image src={ten} alt="" />
              <Image src={eleven} alt="" />
              <Image src={twelve} alt="" />
            </div>
            <div className="text-center">
              <div className="text-[#5c5c5c] font-manrope text-[16px] font-medium tracking-tight lg:tracking-[0.173px] lg:w-[622px] m-auto">
                AI for All: Expanding our mission to democratize AI and coding
                education for everyone, everywhere.
              </div>
            </div>
            {/* <div className="flex flex-col gap-12">
            <div className="m-0 flex justify-center ">
              <div className="px-5 py-4 rounded-[48px] text-white bg-[#27262B] font-manrope font-extrabold text-[16px]">
                Сургалт үзэж эхлэх
              </div>
            </div>
            <div className="flex items-center justify-center gap-7">
              <Image src={unicef} alt="unicef" width={91} />
              <Image src={golomt} alt="golomtbank" width={110} />
            </div>
          </div> */}
            {/* <div className=" "> */}
          </div>
          <div className="flex flex-col items-center justify-end gap-7">
            <div className="flex flex-col lg:flex-row lg:gap-4 gap-2">
              <div className="m-0 z-50 bg-white flex justify-start items-center self-stretch w-auto rounded-[32px] border gap-[10px]  px-6 py-3 border-[#E3E3E3] text-start">
                <Image src={brain} alt="brain" width={24} height={24} />
                <span className="text-[#5c5c5c] font-manrope text-[14px] font-extrabold leading-none">
                  Хиймэл оюун ухаан
                </span>
              </div>
              <div className="flex z-50 bg-white justify-start self-stretch text-start w-auto rounded-[32px] border border-[#E3E3E3] items-center gap-[10px] px-6 py-3">
                <Image src={coding} alt="coding" width={24} height={24} />
                <span className="text-[#5c5c5c] font-manrope text-[14px] font-extrabold leading-none">
                  Кодинг хөтөлбөр
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
