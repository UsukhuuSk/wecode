import { Search01Icon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { BaseApi } from "../../api/baseApi";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

type CourseFilterProps = {
    onChange: (value: any) => void;
};

const CourseFilter: React.FC<CourseFilterProps> = ({ onChange }) => {

    const [topics, setTopics] = useState<any>([])
    const [levels, setLevels] = useState<any>([])
    const [selectedTopics, setSelectedTopics] = useState<any>([])
    const [selectedLevels, setSelectedLevels] = useState<any>([])
    const [text, setText] = useState<any>("")


    useEffect(() => {
        onChange({ selectedTopics, selectedLevels })
    }, [selectedTopics, selectedLevels]);

    useEffect(() => {
        getTopics()
        getLevels();
    }, []);

    const getTopics = async () => {
        try {
            const { list } = await BaseApi._get('9/ref_course_tags')
            setTopics(list)
        } catch (error) {

        }
    }

    const getLevels = async () => {
        try {
            const { list } = await BaseApi._get('9/ref_course_levels')
            setLevels(list)
        } catch (error) {

        }
    }

    const handleTopicChange = (checked: boolean, topicId: number): void => {
        if (checked) {
            setSelectedTopics((prev: any) => [...prev, topicId]); // Add topic to selected
        } else {
            setSelectedTopics((prev: any) => prev.filter((_id: any) => _id !== topicId)); // Remove topic from selected
        }
    };


    const handleLevelChange = (checked: boolean, topicId: number): void => {
        if (checked) {
            setSelectedLevels((prev: any) => [...prev, topicId]); // Add topic to selected
        } else {
            setSelectedLevels((prev: any) => prev.filter((_id: any) => _id !== topicId)); // Remove topic from selected
        }
    };

    return (
        <div className="w-[300px] flex flex-col text-white gap-4 pr-8">
            <div className="flex flex-col gap-4">
                <div className="relative flex justify-between items-center bg-slate-700 text-white max-w-[230px] rounded-[100px] border border-[rgba(64,64,71,0.53)]">
                    <Search01Icon
                        size={16}
                        color={"#fff"}
                        className="absolute left-3"
                    />
                    <Input
                        value={text}
                        onChange={(e: any) => setText(e.target.value)}
                        className="search border-none focus:border-none rounded-[100px] pl-10"
                        placeholder="Search"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-[15px] font-neue font-medium">
                        Filters
                    </span>
                    <span className="text-[15px] font-neue font-bold">
                        Clear all
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[15px] py-[10px] font-medium font-neue">
                        Topics
                    </h2>
                    {topics.map((item: { _id: number, name: string }, index: number) => (
                        <div
                            key={index}
                            className="flex justify-start items-center gap-[10px] hover:underline cursor-pointer"
                        >
                            <label className="flex items-center gap-[10px] cursor-pointer">
                                <Checkbox key={item._id} onCheckedChange={(e: any) =>
                                    handleTopicChange(e, item._id)
                                }
                                    checked={selectedTopics.includes(item._id)} />
                                {item.name}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[15px] py-[10px] font-medium font-neue">
                        Levels
                    </h2>
                    {levels.map((item: { _id: number, name: string }, index: number) => (
                        <div
                            key={index}
                            className="flex justify-start items-center gap-[10px] hover:underline cursor-pointer"
                        >
                            <label className="flex items-center gap-[10px] cursor-pointer">
                                <Checkbox key={item._id} onCheckedChange={(e: any) =>
                                    handleLevelChange(e, item._id)
                                }
                                    checked={selectedLevels.includes(item._id)} />
                                {item.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseFilter;