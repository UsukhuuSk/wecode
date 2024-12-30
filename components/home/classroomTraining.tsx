
import Link from "next/link";


const ClassroomTraining = () => {


    return (
        <div className="text-white grid grid-cols-12 gap-0 md:gap-16 px-4 md:px-14">
            <div className="flex flex-col items-center justify-center col-span-12 md:col-span-4 mb-16 md:mb-0">
                <div className="text-center">
                    <Link href={'/classTraining'} className=" font-neue  text-xl font-semibold md:text-5xl md:font-bold max-w-[960px] m-auto  hover:underline text-center">
                        Танхимын сургалтын бүртгэл эхэллээ.
                    </Link>
                    <div className="flex justify-center mt-8">
                        <Link href={'/classTraining'}>
                            <button className="bg-red-500 hover:border border-red-500 hover:bg-transparent hover:text-red-500 hover:scale-110 rounded-[2rem] text-white text-2xl py-2 px-6 font-bold uppercase transition-all">Бүртгүүлэх</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col gap-2 bg-[#1f086090] rounded-[32px] p-6  font-neue">

            </div>
        </div>
    )
}
export default ClassroomTraining;