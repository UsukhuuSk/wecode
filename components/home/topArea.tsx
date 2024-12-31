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
                {/* <div className="text-gray-100 font-neue text-[14px] md:text-[20px] font-medium tracking-tight lg:tracking-[0.173px] m-auto">
                    {t("subheadline")}
                </div> */}
                <Link href="/course" className="w-auto flex justify-center m-auto text-base font-semibold md:font-bold font-neue py-2 px-3 md:py-3 md:px-4 text-center text-white bg-primary hover:scale-110 transition-all  rounded-[2rem]">
                    {t("start")}
                </Link>
            </div>
        </div>
    )
}
export default HomeTopArea