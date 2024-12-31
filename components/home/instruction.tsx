import Image from "next/image";
import purple from "@/assets/landing/purplePlanet.png";
import mobile from "@/assets/asadasd.png";
import gif from "@/assets/5b7374bbd8f499bfd804b74baa6ebd7a.gif";
import { useTranslations } from "next-intl";
import React from "react";
const HomeInstruction = () => {
  const t = useTranslations("HomePage");

    const Steps = [
        {
            number: 1,
            title: t("steps.1.title"),
            description: t("steps.1.description"),
            className: "col-span-1 px-6 py-8",
            numberStyle: "bg-primary",
            fade: "w-[120px] h-[120px] bg-primary absolute blur-[80px] z-10 ",
        },
        {
            number: 2,
            title: t("steps.2.title"),
            description: t("steps.2.description"),
            className: "col-span-1 px-6 py-8",
            numberStyle: "bg-[#68D8FC]",
            fade: "w-[120px] h-[120px] bg-[#68D8FC] absolute blur-[80px] z-10",
        },
        {
            number: 3,
            title: t("steps.3.title"),
            description: t("steps.3.description"),
            className: "col-span-1 px-6 py-8",
            numberStyle: "bg-[#CC48F4]",
            fade: "w-[120px] h-[120px] bg-[#CC48F4] absolute blur-[120px] z-10",
        },
        {
            number: 4,
            title: t("steps.4.title"),
            description: t("steps.4.description"),
            className: "col-span-6 px-6 py-10 min-h-[185px]",
            numberStyle: "bg-[#F0493E]",
            fade: "w-[224px] h-[224px] bg-[#F0493E] absolute blur-[160px] z-10",
        },
    ];

    return (
        <>
            <div className="absolute top-0 -left-[10%] -z-50">
                <Image src={purple} alt="" width={1000} height={1004} />
            </div>

            <div className="flex flex-col gap-[72px] px-5 py-5 2xl:px-[120px] 2xl:pt-[180px]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-8 items-start">
                        <div className="border-2 border-primary rounded-[32px] px-5 py-2 font-neue md:text-[18px] font-bold ">
                            {t("steps.title")}
                        </div>
                        <h1 className="text-4xl md:text-5xl"> {t("steps.subtitle")}</h1>
                    </div>
                    <div className="">
                        <Image
                            src={gif}
                            alt=""
                            width={120}
                            height={120}
                            className="bg-transparent mix-blend-screen"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-[1fr_80px_2fr_80px_3fr] gap-y-6">
                    {Steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div
                                key={index}
                                className={`bg-[#13032bcc] border border-[#404047] rounded-3xl relative text-center overflow-hidden flex flex-col gap-4 items-center font-neue ${step.className}`}
                            >
                                <div className={`${step.fade}`}></div>
                                <div
                                    className={`z-20 text-[40px] font-bold ${step.numberStyle} w-12 h-12 flex items-center justify-center text-center rounded-full`}
                                >
                                    {step.number}
                                </div>
                                <div className="flex flex-col gap-2 z-20 ">
                                    <h1 className="text-white text-2xl font-bold font-neue">
                                        {step.title}
                                    </h1>
                                    <p className="font-normal text-[14px] text-slate-400 font-neue">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {index < 2 && (
                                <div className="w-[45px] h-[1px] separator items-center justify-center m-auto hidden md:flex "></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeInstruction;