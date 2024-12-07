import { FireIcon, MoreHorizontalIcon, Mortarboard01Icon, Notification01Icon, Notification03Icon, NotificationOff01Icon, Profile02Icon, Settings02Icon, Tick01Icon } from "@hugeicons/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { BaseApi } from "@/api/baseApi"
import { useEffect, useState } from "react"
import { Helper } from "@/lib/helper"
import FirebaseRegister from "./FirebaseRegister"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const NotifBar = () => {
    const trns = useTranslations('header')
    const router = useRouter()
    const [count, setCount] = useState(0)
    const [list, setList] = useState<any>([])
    const [loading, setLoading] = useState(false);

    const [isAll, setAll] = useState(true);

    const [open, setOpen] = useState(false);
    const [stsOpen, setStsOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
        // setStsOpen(false)
    };


    const iconMap: any = {
        'streak': {
            icon: <FireIcon />,
            color: "#FF8500"
        },
        'success': {
            icon: <Tick01Icon />,
            color: "#22C55E"
        },
        'complete': {
            icon: <Mortarboard01Icon variant="solid" />,
            color: "#6068F4"
        },
        'else': {
            icon: <Notification01Icon />,
            color: "#CC48F4"
        }
    }

    useEffect(() => {
        handleRefresh()
    }, [isAll])

    useEffect(() => {
        if (open) {
            setAll(true)
        }
    }, [open])

    const handleRefresh = () => {
        getCount()
        getList()
    }

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
            setLoading(true)
            const data = await BaseApi._get('notification/list/9/service_notifications', !isAll ? { is_read: false } : {})
            setList(data)
        } catch (error) {
            Helper.handleError(error)
        } finally {
            setLoading(false)
        }
    }

    const getIconObj = (type: any) => {
        if (iconMap[type]) {
            return iconMap[type]
        } else {
            return iconMap['else']
        }
    }

    const handleCountChange = () => {
        if (isAll) {
            getList()
        } else {
            setAll(true)
        }
        setCount((prev: number) => prev + 1);
    }

    const handleRead = async (_id: any) => {
        try {
            await BaseApi._post('notification/read/9/service_notifications', { _id })
            handleCloseMenu()
            handleRefresh()
        } catch (error) {
            Helper.handleError(error)
        }
    }

    const handleSettings = () => {
        // handleCloseMenu()
        router.push('/settings/notification')
    }

    const SettingsHeader = () => {
        return (
            <>
                <div className="w-full flex justify-between items-center p-4">
                    <p className="font-bold text-lg">{trns('notifications')}</p>
                    <DropdownMenu open={stsOpen} onOpenChange={setStsOpen}>
                        <DropdownMenuTrigger>
                            <div className=" cursor-pointer p-1 hover:bg-[#FFFFFF33] rounded-full relative">
                                <MoreHorizontalIcon
                                    size={20}
                                    color={"#fff"}
                                    variant="duotone"
                                />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[360px] mr-[130px] bg-[#242455] border-neutral-700 text-white flex flex-col items-start">
                            <div className="p-2 flex flex-col gap-2 w-full">
                                <div className="hover:bg-[#FFFFFF50] cursor-pointer px-2 py-1 rounded-md flex gap-2 items-center" onClick={() => handleRead('all')}>
                                    <Tick01Icon />
                                    {trns('markAllAsread')}
                                </div>
                                <div className="hover:bg-[#FFFFFF50] cursor-pointer px-2 py-1 rounded-md flex gap-2 items-center" onClick={handleSettings}>
                                    <Settings02Icon />
                                    {trns('notifSettings')}
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex gap-2 px-4 mb-2">
                    <button onClick={() => setAll(true)} className={`${isAll ? 'bg-primary' : ''} py-2 px-4 text-sm rounded-[16px] hover:bg-gray-500`}>
                        {trns('notifAll')}
                    </button>
                    <button onClick={() => setAll(false)} className={`${!isAll ? 'bg-primary' : ''} p-2 text-sm rounded-[16px]`}>
                        {trns('notifUnread')}
                    </button>
                </div>
            </>
        )
    }

    const EmptyState = () => {

        return <div className="rounded-md w-full h-24 flex flex-col gap-2 justify-center items-center">
            <p>{trns('noNotif')}</p>
            <NotificationOff01Icon size={30} color={"#fff"}
                variant="duotone" />
        </div>
    }

    return (
        <>
            <FirebaseRegister onCountChange={handleCountChange} />
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <div className="p-1 bg-[#FFFFFF33] hover:bg-[#FFFFFF55] cursor-pointer rounded-full relative">
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
                    {SettingsHeader()}
                    {
                        !loading && list.map((item: any, index: any) => {
                            return (
                                <div key={index} className={`w-[360px] h-16 flex items-center gap-2 px-4 hover:bg-[#FFFFFF40] cursor-pointer ${index < list.length - 1 ? 'border-b border-wcSlate700' : ''} ${!item.is_read ? 'bg-slate-600' : ''}`} onClick={() => handleRead(item._id)}>
                                    <div className="h-8 w-8 flex items-center justify-center rounded-full" style={{ background: getIconObj(item.type_id.alert_type).color }}>
                                        {getIconObj(item.type_id.alert_type).icon}
                                    </div>
                                    <div className="font-normal font-neue text-wrap max-w-72">
                                        <div dangerouslySetInnerHTML={{ __html: item.notif_text }}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {

                    }
                    {
                        loading && <div className="animate-pulse flex flex-col gap-2">
                            {
                                [1, 2, 3, 4, 5].map(el => {
                                    return (
                                        <div key={el} className={`w-[360px] bg-wcSlate h-8 rounded-md`} />
                                    )
                                })
                            }

                        </div>

                    }
                    {
                        !loading && list.length === 0 && EmptyState()
                    }

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}