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
            const { list } = await BaseApi._get('9/service_ref_course_tags')
            setTopics(list)
        } catch (error) {

        }
    }
    return (
        <div className="">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4 md:gap-5 items-center z-50 ">
                {topics.map((t: any, index: number) => (
                    <div key={index}>
                        <CategoryCard
                            _id={t._id}
                            key={index}
                            name={t.name}
                            className={t.className}
                            image={t.image}
                            // icon={category.icon}
                            color={t.color}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCatArea;