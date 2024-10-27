import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import unicef from "../assets/unicef.svg";
import golomt from "../assets/golomt.svg";
import brain from "../assets/brain-02.svg";
import coding from "../assets/code-circle.svg";
import help from "../assets/help-circle.svg";
import bg from "../assets/bg.png";
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

export default function Home() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <>
      <div className="px-4 m-0 bg lg:pt-[125px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat -z-30 top-1/4 lg:top-0"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          {" "}
          <Image
            src={star}
            alt=""
            className="hidden lg:flex lg:absolute  lg:left-0 lg:top-[15%]"
          />
          <Image
            src={star2}
            alt=""
            className="hidden lg:flex lg:absolute lg:right-0 lg:top-[15%] "
          />
          <Image
            src={star3}
            alt=""
            className="flex lg:hidden absolute top-[70%] left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="m-auto flex justify-center">
            <div className="flex items-center gap-6 py-2 px-4 rounded-[32px] bg-white border border-[#C2CAD2] ">
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
                <div className="flex justify-center ">
                  <span className="text-xs font-extrabold font-manrope">
                    4.5
                  </span>
                  <IoIosStar size={14} color="#FFCC15" />
                  <IoIosStar size={14} color="#FFCC15" />
                  <IoIosStar size={14} color="#FFCC15" />
                  <IoIosStar size={14} color="#FFCC15" />
                  <IoIosStar size={14} color="#FFCC15" />
                </div>
                <div className=" text-[#27262B66] font-manrope text-center font-semibold">
                  1200+ сурагчид
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <span className="gradtext font-montserratAlt text-[40px] lg:text-[72px] font-extrabold">
              Хиймэл{" "}
            </span>
            <span className="gradtext font-montserratAlt text-[40px] lg:text-[72px] font-extrabold">
              оюун,{" "}
            </span>
            <span className="gradtext font-montserratAlt text-[40px] lg:text-[72px] font-extrabold">
              кодчлолын
            </span>
            <div className="font-montserratAlt text-[40px] lg:text-[72px] font-extrabold">
              ур чадварт суралцацгаая!
            </div>
            {/* <span className="gradtext font-montserratAlt text-[40px] font-extrabold ">
          Хиймэл оюун, кодчлолын
          </span> */}
          </div>
          <div className="text-center">
            {/* <div className="text-[#5c5c5c] font-manrope text-[16px] font-medium tracking-tight">
            AI for All: Expanding our mission to democratize
          </div>
          <div className="text-[#5c5c5c] font-manrope text-[16px] font-medium tracking-tight">
            AI and coding education for everyone,
          </div>
          <div className="text-[#5c5c5c] font-manrope text-[16px] font-medium tracking-tight">
            everywhere.
          </div> */}
            <div className="text-[#5c5c5c] font-manrope text-[16px] font-medium tracking-tight lg:tracking-[0.173px] lg:w-[622px] m-auto">
              AI for All: Expanding our mission to democratize AI and coding
              education for everyone, everywhere.
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="m-0 flex justify-center ">
              <div className="px-5 py-4 rounded-[48px] text-white bg-[#27262B] font-manrope font-extrabold text-[16px]">
                Сургалт үзэж эхлэх
              </div>
            </div>
            <div className="flex items-center justify-center gap-7">
              <Image src={unicef} alt="unicef" width={91} />
              <Image src={golomt} alt="golomtbank" width={110} />
            </div>
          </div>
        </div>
        <div className="mt-[88px] mb-[125px]">
          <div className="flex flex-col items-center justify-center gap-7">
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
        <div className=" max-w-[1100px] m-auto flex flex-col gap-12 mb-[183px]">
          <h1 className=" text-[24px] font-extrabold text-[#27262b] font-manrope">
            Бидний онцлог
          </h1>
          <div className="flex flex-col lg:grid grid-cols-5 gap-[20px]">
            <div className="bluegrad rounded-2xl pt-[33px] overflow-hidden col-span-2">
              <h1 className="text-mainblack text-[20px] font-extrabold font-manrope text-center">
                Дэлхийд хүлээн зөвшөөрөгдсөн сертификат
              </h1>
              <div className="border text-center border-[#0000000D] w-[237px] h-[1px] mx-auto my-4"></div>
              <div className="flex items-center justify-center gap-6">
                <Image
                  src={unicef}
                  alt="unicef"
                  width={54}
                  height={12}
                  className="object-cover"
                />
                <Image
                  src={unicef}
                  alt="unicef"
                  width={54}
                  height={12}
                  className="object-cover"
                />
                <Image
                  src={unicef}
                  alt="unicef"
                  width={54}
                  height={12}
                  className="object-cover"
                />
              </div>
              <Image src={certicates2} alt="certicates" />
            </div>
            <div className="greengrad rounded-2xl flex flex-col gap-[75px] lg:gap-[30px] pt-[33px] py-[63px] col-span-3 overflow-hidden">
              <h1 className="text-mainblack text-[20px] font-extrabold font-manrope text-center">
                Ур чадваруудын үнэлгээ
                <div className="border text-center border-[#0000000D] w-[237px] h-[1px] mx-auto my-4"></div>
              </h1>

              <Image
                src={graph}
                alt="statistics"
                className="px-1 object-contain mx-auto lg:w-[485px] lg:h-[362px]"
              />
              <div className="flex justify-center gap-7">
                <div className="flex justify-between items-center gap-[6px]">
                  <div className="bg-[#2EBD59] h-3 w-3 rounded"></div>
                  <span className="text-[14px] font-normal font-manrope text-[#080808]">
                    Таны үзүүлэлт
                  </span>
                </div>
                <div className="flex justify-between items-center gap-[6px]">
                  <div className="bg-[#5C5C5C] h-3 w-3 rounded"></div>
                  <span className="text-[14px] font-normal font-manrope text-[#080808]">
                    Дундаж
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-5 rounded-2xl relative flex gap-4 py-[33px] lg:py-[50px] px-3 overflow-hidden border-2 border-[#E4E4E4]">
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat -z-30"
                style={{ backgroundImage: `url(${cardgrad.src})` }}
              ></div>
              <Image
                src={star4}
                alt=""
                className="lg:hidden absolute top-[70%] left-1/2 -translate-x-1/2"
              />
              <Image src={star4} alt="" className="absolute left-0" />
              <div className="flex flex-col gap-4 justify-center lg:ml-36">
                <h1 className="text-mainblack text-[20px] font-extrabold font-manrope text-center">
                  <div className=" text-[32px] font-extrabold font-manrope text-start">
                    Мобайл хувилбар
                  </div>
                  <div className="text-[#27262B80] text-2xl font-light text-start">
                    тун удахгүй ...
                  </div>
                </h1>
                <div className="flex items-center gap-3 z-50">
                  <div className="flex items-center gap-2 py-2 px-4 rounded-[32px] bg-white border border-[#E3E3E3]">
                    <FaApple />
                    <Image src={apple} alt="" className="z-50" />
                  </div>
                  <div className="flex items-center gap-2 py-2 px-4 rounded-[32px] bg-white border-[#E3E3E3]">
                    <FaPlay />
                    <Image src={google} alt="" />
                  </div>
                </div>
              </div>
              <Image
                src={phone}
                alt="screens"
                className="hidden lg:flex absolute top-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50rem]  bg-[#F3F3F3] bg-grid-small-black/[0.05] lg:bg-grid-black/[0.05]">
        <div className="flex flex-col gap-4 py-[95px] items-center">
          <div className="text-center text-[32px] font-extrabold font-manrope">
            Сурагчид болон салбарын экспертүүдийн сэтгэгдэл
          </div>

          <div className="flex">
            <IoIosStar size={32} color="DBB500" />
            <IoIosStar size={32} color="DBB500" />
            <IoIosStar size={32} color="DBB500" />
            <IoIosStar size={32} color="DBB500" />
            <IoIosStar size={32} color="DBB500" />
          </div>
        </div>
      </div>
    </>
  );
}
