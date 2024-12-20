import { useTranslations } from "next-intl"
import { forwardRef, useEffect, useRef, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
interface BoardProps {
    main?: boolean
    onChange?: (val: any) => any
}
export const BoardFilter = ({ main, onChange }: BoardProps) => {
    const trns = useTranslations('profile.boardItems')
    const [filterValue, setFilterValue] = useState<any>(null)
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (onChange)
                onChange(filterValue)
        }
    }, [filterValue])
    const filter = [
        { name: trns('total'), value: null },
        { name: trns('today'), value: "today" },
        { name: trns('this_week'), value: "this_week" },
        { name: trns('this_month'), value: "this_month" },
        { name: trns('quarter_year'), value: "quarter_year" },
        { name: trns('half_year'), value: "half_year" },
        { name: trns('this_year'), value: "this_year" }
    ]

    return (
        <Select value={filterValue} onValueChange={setFilterValue}>
            <SelectTrigger className={`${main ? 'w-full' : 'w-[180px] bg-[#272142] '}  text-white border-none`}>
                <SelectValue placeholder={trns('total')} />
            </SelectTrigger>
            <SelectContent className="bg-[#13032b] text-white border border-[#40404787] z-50">
                {
                    filter.map((f: any, index: number) => <SelectItem className="hover:bg-[#ffffff50] cursor-pointer rounded-md" key={index} value={f.value}>{f.name}</SelectItem>)
                }
            </SelectContent>
        </Select>
    )
}