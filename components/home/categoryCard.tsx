import { BaseApi } from "@/api/baseApi";
import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";

const HomeCatArea = () => {
    const [topics, setTopics] = useState<any>([])
    useEffect(() => {
        getTopics()
    }, [])


    const getTopics = async () => {
        try {
            const { list } = await BaseApi._get('9/ref_course_tags')
            setTopics(list)
        } catch (error) {

        }
    }
    return (
        <div className="">
            <div className="flex justify-between flex-col gap-4 md:gap-5 items-center z-50">
                <div className="grid  grid-cols-1 md:grid-cols-4  xl:grid-cols-4 text-center gap-4 md:gap-5 ">
                    {topics.slice(0, 4).map((t: any, index: number) => (
                        <CategoryCard
                            _id={t._id}
                            key={index}
                            name={t.name}
                            className={t.className}
                            image={t.image}
                            // icon={category.icon}
                            color={t.color}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-3 text-center gap-4 md:gap-5 m-auto">
                    {topics.slice(4, 7).map((t: any, index: any) => (
                        <CategoryCard
                            _id={t._id}
                            key={index}
                            name={t.name}
                            className={t.className}
                            icon={t.icon}
                            image={t.image}
                            color={t.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeCatArea;