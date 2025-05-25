import { useState } from "react";
import moment from "moment";
import PropTypes from 'prop-types';
import Modal from "../Modal";
import DailySchedule from "./DailySchedule";

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

const MonthlySchedule = ({
    data = [],
    date = moment().format('YYYY-MM-DD'),
}) => {
    const [appointmentColors, setAppointmentColors] = useState([]);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [selectedDate, setSelectedDate] = useState(date);

    const currentDate = moment(date);
    const startOfMonth = currentDate.clone().startOf('month');
    const endOfMonth = currentDate.clone().endOf('month');
    const startOfWeek = startOfMonth.clone().startOf('week');
    const endOfWeek = endOfMonth.clone().endOf('week');
    const weekdays = moment.weekdaysShort();

    const days = [];
    let day = startOfWeek.clone();

    while (day.isSameOrBefore(endOfWeek, 'day')) {
        days.push(day.clone());
        day.add(1, 'day');
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

    const onHandleDetail = (date) => {
        setSelectedDate(date);
        setIsOpenDetail(true);
    }

    return (
        <div className="schedules">
            <Modal
                isOpen={isOpenDetail}
                onClose={() => setIsOpenDetail(false)}
                size="lg"
                title={`Appointments on ${moment(selectedDate).format('MMM DD, YYYY')}`}
            >
                <DailySchedule
                    data={data}
                    date={selectedDate}
                />
            </Modal>
            
            <div className="grid grid-cols-7 font-medium">
                {weekdays.map((weekday, index) => (
                    <div key={weekday} className={`p-2 ${index > 0 ? 'border-l' : ''} border-b border-gray-200`}>
                        {weekday}
                    </div>
                ))}
            </div>
            
            <div className="grid grid-cols-7">
                {days.map((day, index) => (
                    <div
                        onClick={() => onHandleDetail(day.format('YYYY-MM-DD'))}
                        key={index}
                        className={`
                            hover:cursor-pointer
                            relative
                            p-2 h-28 border-b border-gray-200
                            ${day.weekday() > 0 ? 'border-l' : ''}
                            ${day.isSame(currentDate, 'month') ? 'text-black' : 'text-gray-400'}
                        `}
                    >
                        <span className={`${day.isSame(currentDate) ? 'bg-primary text-white px-3 py-1 rounded-full' : ''}`}>{day.date()}</span>
                        {
                            data?.filter((item) => day.isSame(moment(item.date)))
                                ?.map((item, index) => {
                                    return (
                                        <button
                                            onClick={() => onHandleDetail(day.format('YYYY-MM-DD'))}
                                            key={index}
                                            className={`absolute bottom-2 w-4 h-4 rounded-full shadow ${getColor(item)}`}
                                            style={{ left: `${(index) * 10}px` }}
                                        />
                                    )
                            })
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

MonthlySchedule.propTypes = {
    date: PropTypes.any,
    data: PropTypes.array
}

export default MonthlySchedule;

