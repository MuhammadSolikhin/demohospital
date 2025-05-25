import moment from "moment";
import PropTypes from 'prop-types';
import Typography from "../../atoms/Typography";
import { useState } from "react";
import Modal from "../Modal";
import DailySchedule from "./DailySchedule";

const Month = ({
    month,
    date,
    data,
    onHandleDetail
}) => {
    const startOfMonth = moment(date).month(month).startOf('month');
    const endOfMonth = moment(date).month(month).endOf('month');
    const startOfWeek = startOfMonth.clone().startOf('week');
    const endOfWeek = endOfMonth.clone().endOf('week');
    const weekdays = moment.weekdaysShort();

    const days = [];
    let day = startOfWeek.clone();

    while (day.isSameOrBefore(endOfWeek, 'day')) {
        days.push(day.clone());
        day.add(1, 'day');
    }

    const hasData = (date) => {
        return data?.filter((item) => date.isSame(item?.date))?.length > 0;
    }

    return (
        <div className="monthly space-y-2 p-2">
            <Typography variant="p" className="font-semibold">{startOfMonth.format('MMMM')}</Typography>
            <div className="dates">
                <div className="grid grid-cols-7 font-medium">
                    {weekdays.map((weekday) => (
                        <div key={weekday} className={`p-2 text-sm text-center border-b border-gray-200`}>
                            {weekday}
                        </div>
                    ))}
                </div>
                <div className="grid gap-y-2 grid-cols-7">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`
                                p-2 text-center
                                ${day.isSame(startOfMonth, 'month') ? 'text-black' : 'text-gray-400'}
                                ${hasData(day) ? 'bg-primary-light' : ''}
                                ${hasData(moment(day).subtract(1, 'days')) ? '' : 'rounded-l-full'}
                                ${hasData(moment(day).add(1, 'days')) ? '' : 'rounded-r-full'}
                            `}
                        >
                            <button onClick={() => onHandleDetail(day.format('YYYY-MM-DD'))}>{day.date()}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Calendar = ({
    data,
    date
}) => {
    const months = Array.from({ length: 12 }, (_, i) => i);

    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [selectedDate, setSelectedDate] = useState(date);

    const onHandleDetail = (date) => {
        setSelectedDate(date);
        setIsOpenDetail(true);
    }

    return (
        <div className="anual-schedules calendar">
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {
                    months?.map((month, key) => (
                        <div className={`
                            col-span-1 
                            ${key % 3 === 1 ? 'border-l border-r' : ''}
                        `} key={key}>
                            <Month
                                data={data}
                                month={month}
                                date={date}
                                onHandleDetail={onHandleDetail}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const AnnualSchedule = ({
    data = [],
    date = moment().format('YYYY-MM-DD')
}) => {
    return (
        <Calendar
            data={data}
            date={date}
        />
    );
};

Month.propTypes = {
    month: PropTypes.string,
    date: PropTypes.any,
    data: PropTypes.array,
    onHandleDetail: PropTypes.func
}

Calendar.propTypes = {
    date: PropTypes.any,
    data: PropTypes.array
}

AnnualSchedule.propTypes = {
    date: PropTypes.any,
    data: PropTypes.array
};

export default AnnualSchedule;
