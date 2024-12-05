import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import HugeIcon from '../ui/HugeIcon';
import { useTranslations } from 'next-intl';
import { Helper } from '@/lib/helper';
import { BaseApi } from '@/api/baseApi';

export const ProfileCalendar = ({ locale }: any) => {
    const trns = useTranslations('profile.calendar')
    const [currentDate, setCurrentDate] = useState(dayjs().locale(locale));

    const daysInMonth = currentDate.daysInMonth();
    const startOfMonth = currentDate.startOf('month').day();
    const days = [...Array(daysInMonth).keys()].map((i) => i + 1);
    const today = dayjs();
    const [streakDays, setStreakDays] = useState<any>([])

    useEffect(() => {
        getStreakDays()
    }, [])

    const getStreakDays = async () => {
        try {
            const list = await BaseApi._get('exam/streakdays', { date: today.format('YYYY-MM-DD') })
            if (Helper.isNotEmptyList(list)) {
                for (const item of list) {
                    if (Helper.isNotEmptyList(item['streak_dates'])) {
                        setStreakDays((prev: any) => [...prev, ...item['streak_dates']]);
                    }
                }
            }

        } catch (error) {
            Helper.handleError(error)
        }
    }

    const handleMonthChange = (direction: 'prev' | 'next') => {
        setCurrentDate((prev) =>
            direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month')
        );
    };

    return (
        <div>
            <p className='flex items-center gap-2 text-white text-lg font-medium font-neue'> <HugeIcon name="fire" color="#FF8500" size={28} /> {trns("daylyStreak")}</p>
            <div className="max-w-md mx-auto mt-4 p-4 border border-wcBorder rounded-lg shadow-md bg-cardDark">
                <div className="flex justify-between  mb-4 h-10  border-b border-wcBorder">
                    <button
                        onClick={() => handleMonthChange('prev')}
                        className="hover:bg-cardDark h-6 rounded-full"
                    >
                        <HugeIcon name="angleLeft" color={'white'} size={24} />
                    </button>
                    <h2 className=" text-white font-medium text-lg ">
                        {currentDate.format('MMMM YYYY')}
                    </h2>
                    <button
                        onClick={() => handleMonthChange('next')}
                        className='hover:bg-cardDark h-6 rounded-full'
                    >
                        <HugeIcon name="angleRight" color={'white'} size={24} />
                    </button>
                </div>

                <div className="grid grid-cols-7 text-center text-white font-normal font-neue mb-2">
                    {[trns('sunday'), trns('monday'), trns('tuesday'), trns('wednesday'), trns('thursday'), trns('friday'), trns('saturday')].map((day) => (
                        <div key={day} className="p-2 uppercase">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 text-center gap-4">
                    {Array.from({ length: startOfMonth }).map((_, index) => (
                        <div key={`empty-${index}`} className="p-2"></div>
                    ))}

                    {days.map((day) => {
                        const currentDay = currentDate.date(day);
                        const isToday = currentDay.isSame(today, 'day');
                        const isInStreak = () => {
                            return streakDays.includes(currentDay.format('YYYY-MM-DD'))
                        }
                        return (
                            <div
                                key={day}
                                className={`flex flex-col items-center justify-center h-8 w-8
                                 rounded-full bg-[#FFFFFF10] hover:bg-slate-600 text-white cursor-pointer
                                  ${isToday ? 'border border-dashed border-red-500' : ''} 
                                  ${isInStreak() ? 'bg-wcOrange text-xs' : ''}
                                  `}
                            >
                                {
                                    isInStreak() && <p>
                                        <HugeIcon name="fire" color={'white'} />
                                    </p>
                                }
                                {day}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}