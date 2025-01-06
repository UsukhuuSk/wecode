import logo1 from "@/assets/landing/Mask group.svg";
import logo2 from "@/assets/landing/Mask group1.svg";
import logo3 from "@/assets/landing/Group 12.svg";
import WefLogo from "@/assets/landing/weflogo.svg"
import CamLogo from "@/assets/landing/CamLogo.svg"

import unicefLogo from "@/assets/landing/unicefLogo.png"

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FaAppleAlt } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import mobile from "@/assets/asadasd.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "next/navigation";


const HomeJourney = () => {
    const t = useTranslations("HomePage");
    const locale = useLocale()

    return (
        <>
            <div className="mt-32 border-t border-b border-[#FFFFFF33]">
                <div className="flex flex-col gap-7 md:flex-row justify-between items-center px-5 py-5 2xl:px-[120px] 2xl:py-12">
                    <span className="text-slate-400 font-medium text-2xl text-center">
                        {t("partners")}
                    </span>
                    <Image height={80} src={WefLogo} alt="" />
                    <Image height={80} src={CamLogo} alt="" />
                    <Image src={logo3} alt="" />
                    <Image height={80} src={unicefLogo} alt="" />
                    <Image src={logo2} alt="" />
                </div>
            </div>

            <div className="2xl:px-[120px] 2xl:py-[210px] px-5 py-5 sm:py-20 ">
                <div className="relative text-center text-white ">
                    <p className="font-neue  text-2xl font-semibold md:text-5xl md:font-bold max-w-[960px] m-auto">
                        {t("journey")}
                    </p>
                    {/* <Image
              src={half}
              alt=""
              width={44}
              height={78}
              className="-rotate-90 absolute left-[33%] top-[90%] transform -translate-x-1/2 -translate-y-1/2"
            /> */}
                </div>
                <div className="mt-[68px] grid md:grid-cols-7 gap-5 mx-auto">
                    {/* <div
                        className={`rainbow text-start col-span-7  p-16 rounded-3xl relative overflow-hidden flex gap-4 justify-center md:justify-start items-start font-neue `}
                    > */}
                    <div
                        className={`rainbow text-start md:col-span-5 p-16 rounded-3xl relative overflow-hidden flex gap-4 justify-center md:justify-start items-start font-neue `}
                    >
                        <div className="flex flex-col justify-center items-center md:items-start gap-3 z-20 ">
                            <h1 className="text-xl md:text-2xl">
                                <span className="text-white  font-semibold md:font-bold font-neue">
                                    {t("mobile")}{" "}
                                </span>
                                <span className=" text-white font-light">
                                    {t("soon")}
                                </span>
                            </h1>
                            <div className="flex flex-row items-start md:items-center justify-start gap-3">
                                <div className="flex items-center  gap-3 w-[170px] rounded-[48px] bg-[#FFFFFF33] border border-[#FFFFFF66] justify-start text-white py-[10px] px-5">
                                    <FaAppleAlt size={16} color="#fff" />
                                    <span>App Store</span>
                                </div>
                                <div className="flex items-center gap-3 w-[170px] rounded-[48px] bg-[#FFFFFF33] border border-[#FFFFFF66] justify-start text-white py-[10px] px-5">
                                    <IoPlay size={16} color="#fff" />
                                    <span>Google Play </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute hidden lg:flex top-0 right-[5%] lg:h-[276px] lg:w-[276px]">
                            <Image
                                src={mobile}
                                alt="mobile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div
                        className={`bg-[#13032bcc] border-2 md:col-span-2 p-12 border-[#404047] rounded-3xl relative text-start overflow-hidden flex flex-col gap-4 items-center font-neue `}
                    >
                        <div className="flex flex-col items-start gap-6 z-20 ">
                            <h1 className="text-white text-xl font-semibold md:text-2xl md:font-bold font-neue">
                                {t("started")}
                            </h1>
                            <Link href={`/${locale}/login?mode=register`} className="hover:scale-95 transition-all flex items-center gap-3 w-auto justify-start rounded-[48px] bg-[#FFFFFF33] border border-[#FFFFFF66]  text-white py-[10px] px-5">
                                <span>{t("sign")} </span>
                                <FaArrowRight size={12} color="#fff" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeJourney;