import Image from "next/image";
import { useTranslations } from "next-intl";
import seventh from "@/assets/LandingPage/7.svg";
import eight from "@/assets/LandingPage/8.svg";
import nine from "@/assets/LandingPage/9.svg";
import ten from "@/assets/LandingPage/10.svg";
import eleven from "@/assets/LandingPage/11.svg";
import twelve from "@/assets/LandingPage/12.svg";


import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import fancy from "@/assets/fancy.svg";
import fancy2 from "@/assets/fancy2.svg";
import fancy3 from "@/assets/fancy3.svg";
import fancy4 from "@/assets/fancy4.svg";
const HomeFeatures = () => {
    const t = useTranslations("HomePage");

    const cardData = [
        {
            title: t("cardData.1.title"),
            img: fancy,
            description: t("cardData.1.description"),
        },
        {
            title: t("cardData.2.title"),
            img: fancy2,
            description: t("cardData.2.description"),
        },
        {
            title: t("cardData.3.title"),
            img: fancy4,
            description: t("cardData.3.description"),
        },
        {
            title: t("cardData.4.title"),
            img: fancy3,
            description: t("cardData.4.description"),
        },
    ];

    return (
        <div className="block xl:flex items-center gap-[45px]">
            <div className="flex flex-col gap-12 items-center xl:items-start">
                <div className="border-2 border-[#4317FF] rounded-[32px] px-5 py-2 font-neue text-[18px] font-bold">
                    {t("cardData.feature")}
                </div>
                <h1 className="font-bold font-neue text-4xl md:text-5xl text-center xl:text-start">
                    {t("cardData.explore")}
                </h1>
                <p className="font-normal font-neue text-[16px] text-slate-300 text-center">
                    {t("cardData.unlock")}
                </p>
                <div className="flex items-center gap-5 md:gap-10 m-auto xl:m-0">
                    <Image
                        src={seventh}
                        alt=""
                        className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
                    />
                    <Image
                        src={eight}
                        alt=""
                        className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
                    />
                    <Image
                        src={nine}
                        alt=""
                        className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
                    />
                    <Image
                        src={ten}
                        alt=""
                        className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
                    />
                    <Image
                        src={eleven}
                        alt=""
                        className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
                    />
                    <Image
                        src={twelve}
                        alt=""
                        className="h-[24px] w-[24px] 2xl:h-[48px] 2xl:w-[48px]"
                    />
                </div>
            </div>
            <div className="my-10 xl:my-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col 2xl:w-[340px] min-h-[315px] border border-[#404047] rounded-3xl"
                        >
                            <Image
                                src={card.img}
                                alt=""
                                width={340}
                                height={163}
                                className="cardShadow rounded-3xl object-cover"
                            />
                            <div className="px-[22px]">
                                <h1 className="text-[16px] font-neue font-medium">
                                    {card.title}
                                </h1>
                                <p className="text-[14px] font-normal text-slate-400">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HomeFeatures;