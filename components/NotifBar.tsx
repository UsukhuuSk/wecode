import { CheckUnread01Icon, FireIcon, Notification01Icon, Notification03Icon, Profile02Icon, Tick01Icon } from "@hugeicons/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { BaseApi } from "@/api/baseApi"
import { useEffect, useState } from "react"
import { Helper } from "@/lib/helper"
import { CheckIcon } from "@radix-ui/react-icons"

export const NotifBar = () => {
    const [count, setCount] = useState(0)
    const [list, setList] = useState<any>([])

    const iconMap: any = {
        'streak': {
            icon: <FireIcon />,
            color: "#FF8500"
        },
        'success': {
            icon: <Tick01Icon />,
            color: "#22C55E"
        },
        'else': {
            icon: <Notification01Icon />,
            color: "#CC48F4"
        }
    }

    useEffect(() => {
        getCount()
        getList()
    }, [])

    const getCount = async () => {
        try {
            const data = await BaseApi._get('notification/count/9/service_notifications', { is_read: false })
            setCount(data.count)
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const getList = async () => {
        try {
            const data = await BaseApi._get('notification/list/9/service_notifications', { is_read: false })
            setList(data)
        } catch (error) {
            Helper.handleError(error)
        }
    }


    return (

        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div className="p-1 bg-[#FFFFFF33] rounded-full relative">
                    <Notification03Icon
                        size={20}
                        color={"#fff"}
                        variant="duotone"
                    />
                    <div className="absolute -top-1 -right-2 bg-red-500 py-[2px] px-[4px] rounded-md text-xs">
                        {count}
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[360px] mr-[110px] bg-[#1a1a40] border-neutral-700 text-white flex flex-col items-start">
                {
                    list.map((item: any, index: any) => {
                        return (
                            <div key={index} className={`w-[360px] h-16 flex items-center gap-2 px-4 hover:bg-[#FFFFFF40] cursor-pointer ${index < list.length - 1 ? 'border-b border-wcSlate700' : ''}`}>
                                <div className="flex-1 h-8 w-8 flex items-center justify-center rounded-full" style={{ background: iconMap[item.type_id.alert_type] ? iconMap[item.type_id.alert_type].color : iconMap['else'].color }}>
                                    {iconMap[item.type_id.alert_type] ? iconMap[item.type_id.alert_type].icon : iconMap['else']}
                                </div>
                                <div className="font-normal font-neue text-wrap max-w-72">
                                    <div dangerouslySetInnerHTML={{ __html: item.notif_text }}></div>
                                </div>
                            </div>
                        )
                    })
                }

            </DropdownMenuContent>
        </DropdownMenu>
    )
}