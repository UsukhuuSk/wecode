import { FilterIcon, FilterVerticalIcon, Search01Icon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { BaseApi } from "../../api/baseApi";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type CourseFilterProps = {
    onChange: (field: any, value: any, d?: any) => void;
    filter: any;
    onClear: () => any;
};

const CourseFilter: React.FC<CourseFilterProps> = ({ filter, onChange, onClear }) => {
    const trns = useTranslations("course.detail");
    const [topics, setTopics] = useState<any>([])
    const [levels, setLevels] = useState<any>([])


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
        onChange('topics', topicId, checked)
    };


    const handleLevelChange = (checked: boolean, levelId: number): void => {
        onChange('levels', levelId, checked)
    };

    const handleChangeText = (e: any) => {
        onChange('text', e.target.value)
    }

    const handleClear = () => {
        onClear()
    }
    const RenderFilter = () => {
        return (
            <div className="flex flex-col gap-4">
                <div className="relative flex justify-between items-center bg-slate-700 text-white max-w-[230px] rounded-[100px] border border-[rgba(64,64,71,0.79)]">
                    <Search01Icon
                        size={16}
                        color={"#fff"}
                        className="absolute left-3"
                    />
                    <Input
                        value={filter.text}
                        onChange={handleChangeText}
                        className="search border-none focus:border-none rounded-[100px] pl-10"
                        placeholder={trns("search")}
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-[15px] font-neue font-medium">
                        {trns("filters")}
                    </span>
                    <span className="text-[15px] font-neue font-bold hover:text-gray-100 cursor-pointer" onClick={handleClear}>
                        {trns("clear")}
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[15px] py-[10px] font-medium font-neue">
                        {trns("topics")}
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
                                    checked={filter.topics.includes(item._id)} />
                                {item.name}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[15px] py-[10px] font-medium font-neue">
                        {trns("levels")}
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
                                    checked={filter.levels.includes(item._id)} />
                                {item.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    const MobileMenu = () => {
        return (
            <div className="flex items-center justify-between w-full mb-4">
                <div className="relative flex w-full justify-between items-center bg-slate-700 text-white rounded-[100px] border border-slate-600">
                    <Search01Icon
                        size={16}
                        color={"#fff"}
                        className="absolute left-3"
                    />
                    <Input
                        value={filter.text}
                        onChange={handleChangeText}
                        className="w-full search border-none focus:border-none rounded-[100px] pl-10"
                        placeholder={trns("search")}
                    />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className=" text-white cursor-pointer hover:bg-[#FFFFFF50] px-4 py-1 rounded-md">
                            <button className="h-10 w-10 flex items-center justify-center rounded-full bg-wcSlate700">
                                <FilterIcon variant="solid" height={16} />
                            </button>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-main z-[1000] w-[300px] border-gray-900 text-white">
                        <SheetHeader>
                            <SheetDescription>
                                <div className="flex flex-col items-start justify-center gap-4 text-white mt-6">
                                    {RenderFilter()}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                        {/* <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter> */}
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
    return (
        <>
            <div className="hidden md:flex w-[300px] flex-col text-white gap-4">
                {RenderFilter()}
            </div>
            <div className="flex md:hidden">
                {MobileMenu()}
            </div>
        </>
    )
}

export default CourseFilter;