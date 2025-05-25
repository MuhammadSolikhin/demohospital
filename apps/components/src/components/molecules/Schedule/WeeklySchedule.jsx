import { useCallback, useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Alert from "../../../providers/alert/Alert";
import moment from "moment";
import PropTypes from 'prop-types';

const colors = [
    { key: "red", classes: "bg-red-100 text-red-500 border-red-500" },
    { key: "orange", classes: "bg-orange-100 text-orange-500 border-orange-500" },
    { key: "yellow", classes: "bg-yellow-100 text-yellow-500 border-yellow-500" },
    { key: "green", classes: "bg-green-100 text-green-500 border-green-500" },
    { key: "emerald", classes: "bg-emerald-100 text-emerald-500 border-emerald-500" },
    { key: "teal", classes: "bg-teal-100 text-teal-500 border-teal-500" },
    { key: "cyan", classes: "bg-cyan-100 text-cyan-500 border-cyan-500" },
    { key: "blue", classes: "bg-blue-100 text-blue-500 border-blue-500" },
    { key: "violet", classes: "bg-violet-100 text-violet-500 border-violet-500" },
    { key: "purple", classes: "bg-purple-100 text-purple-500 border-purple-500" },
    { key: "fuchsia", classes: "bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500" },
    { key: "pink", classes: "bg-pink-100 text-pink-500 border-pink-500" }
];

const WeeklySchedule = ({
    date = moment().format('YYYY-MM-DD'),
    data = []
}) => {
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const [weeks, setWeeks] = useState([]);
    const [appointmentColors, setAppointmentColors] = useState([]);

    const setWeek = useCallback(() => {
        const currentWeek = moment(date).startOf('week'); 
        const lastWeek = moment(date).endOf('week');
        const weekRange = [];

        for(let startDate = currentWeek; startDate.isSameOrBefore(lastWeek); startDate.add(1, 'days')) {
            weekRange.push(startDate.format('YYYY-MM-DD'));
        }
        
        setWeeks(weekRange);
    }, [date]);

    const hourFormat = (hour) => {
        const prefix = hour < 12 ? 'AM' : 'PM';
        const format = hour % 12 === 0 ? 12 : hour % 12;
        return `${format} ${prefix}`;
    }

    const getColor = (item) => {
        const existingColor = appointmentColors.find(appointment => appointment.title === item.title);
        if (existingColor) {
            return colors.find((color) => color.key === existingColor.color)?.classes;
        }

        // const usedColors = appointmentColors.map(appointment => appointment.color);
        // const availableColors = colors.filter(color => !usedColors.includes(color.key));

        const randomColor = colors[Math.floor(Math.random() * colors.length)].key;

        setAppointmentColors(prevColors => [
            ...prevColors,
            { title: item.title, color: randomColor }
        ]);
    
        return colors.find((color) => color.key === randomColor)?.classes;
    };

    const onClickDetail = (data) => {
        Alert.html(`
            <div class='text-start space-y-2'>
                <div class="flex gap-2 items-center justify-start">
                    <div class="w-4 h-4 rounded-md ${getColor(data)}"></div>
                    <h4 class='font-bold'>${data.title}</h4>
                </div>
                <p>${data.description}</p>
                <p>${data.started_at} - ${data.ended_at}</p>
            </div>
        `);
    }

    useEffect(() => {
        setWeek();
    }, [setWeek]);
    
    return (
        <div className="weekly-schedule w-full">
            <div className="header grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <div className="grid grid-cols-7">
                        {
                            weeks?.map((week, index) => {
                                return (
                                    <div className="col-span-1" key={index}>
                                        <div className={`p-2 ${index > 0 ? 'border-l' : ''} border-b border-gray-300`}>
                                            <Typography variant="small" className="text-gray-500">{moment(week).format('ddd')}</Typography>
                                            <Typography variant="h4" className="font-bold">{moment(week).format('DD')}</Typography>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-1 text-end">
                    GMT+7
                </div>
            </div>
            {
                hours?.map((hour, index) => {
                    return (
                        <div className="grid grid-cols-12 w-full" key={index}>
                            <div className="col-span-1 py-2">{hourFormat(hour)}</div>
                            <div className="col-span-10">
                                <div className="grid grid-cols-7 w-full">
                                    {
                                        weeks?.map((week, index) => {
                                            return (
                                                <div className={`wekly-item col-span-1 ${index == 0 ? '' : 'border-l'} border-b border-gray-200 pb-2`} key={index}>
                                                    <div className={`bg-white min-h-16`}>
                                                        {
                                                            data?.filter((item) => (parseInt(hour) >= parseInt(item.started_at.split(':')[0]) && parseInt(hour) < parseInt(item.ended_at.split(':')[0])) && item.date == week)
                                                                ?.map((item, index) => {
                                                                    return (
                                                                        <div className={`schedule-list-item rounded w-full h-full p-2 border-l-4 ${getColor(item)} hover:cursor-pointer`} key={index} onClick={() => onClickDetail(item)}>
                                                                            <Typography variant="small" className="font-bold">{item?.started_at} - {item?.ended_at}</Typography>
                                                                            <Typography variant="p" className="truncate text-sm">{item?.title}</Typography>
                                                                        </div>
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-span-1 py-2 text-end">{hourFormat(hour)}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

WeeklySchedule.propTypes = {
    date: PropTypes.any,
    data: PropTypes.array,
}

export default WeeklySchedule;

