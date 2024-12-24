import Link from "next/link"
import Hero from "../Hero"
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const HomeTopArea = () => {
  const t = useTranslations("HomePage");

    return (
        <div>
            <Hero />
            <div className="text-center flex flex-col gap-10">
                <div className="text-gray-100 font-neue text-[14px] md:text-[20px] font-medium tracking-tight lg:tracking-[0.173px] m-auto">
                    {t("subheadline")}
                </div>
                <Link href="/course" className="w-auto flex justify-center m-auto text-base font-bold font-neue py-4 px-4 text-center text-white bg-[#4317FF] hover:scale-105 transition-all rounded-[32px]">
                    {t("start")}
                </Link>
            </div>
        </div>
    )
}
export default HomeTopArea