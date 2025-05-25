import { useState, useEffect, useCallback } from "react"
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from "../atoms/Card";
import CardHeader from "../atoms/CardHeader";
import CardBody from "../atoms/CardBody";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

const Calendar = ({
    onClick = (date) => date,
}) => {
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    
    const [dateEndOfWeek, setDateEndOfWeek] = useState(moment(date).endOf('week').format('YYYY-MM-DD'));
    const [monthAndYearDisplay, setMonthAndYearDisplay] = useState(moment(date).format('MMMM YYYY'));
    const [dateDisplay, setDateDisplay] = useState([]);

    const setCalendar = useCallback((date) => {
        const startDate = moment(date).startOf('week');
        const endDate = moment(date).endOf('week');

        const dateRange = [];
        for(let date = startDate; date.isSameOrBefore(endDate); date.add(1, 'days')) {
            dateRange.push(date.format('YYYY-MM-DD'));
        }

        setDateDisplay(dateRange);
    }, []);

    const onChangePreviousWeek = useCallback(() => {
        const startOfDatePreviosWeek = moment(dateEndOfWeek).startOf('week').subtract(1, 'day').format('YYYY-MM-DD');
        const endOfDateNextWeek = moment(startOfDatePreviosWeek).endOf('week');
        setDateEndOfWeek(endOfDateNextWeek.format('YYYY-MM-DD'));
        setCalendar(startOfDatePreviosWeek);
        setMonthAndYearDisplay(endOfDateNextWeek.format('MMMM YYYY'));
    }, [setCalendar, dateEndOfWeek]);

    const onChangeNextWeek = useCallback(() => {
        const startOfDateNextWeek = moment(dateEndOfWeek).endOf('week').add(1, 'day').format('YYYY-MM-DD');
        const endOfDateNextWeek = moment(startOfDateNextWeek).endOf('week');
        setDateEndOfWeek(endOfDateNextWeek.format('YYYY-MM-DD'));
        setCalendar(startOfDateNextWeek);
        setMonthAndYearDisplay(endOfDateNextWeek.format('MMMM YYYY'));
    }, [setCalendar, dateEndOfWeek]);

    const onChangeDate = useCallback((date) => {
        setDate(date);
        onClick(date);
        setMonthAndYearDisplay(moment(date).format('MMMM YYYY'));
    }, [onClick]);

    useEffect(() => {
        setCalendar(date);
    }, [setCalendar, date]);
    
    return (
        <Card className="!shadow-none p-primary">
            <CardHeader className="flex items-center justify-between py-4">
                <Button icon='mingcute:left-line' variant="none" onClick={onChangePreviousWeek} />
                <Typography variant='h4'>
                    {monthAndYearDisplay}
                </Typography>
                <Button icon='mingcute:right-line' variant="none" onClick={onChangeNextWeek} />
            </CardHeader>
            <CardBody className="pb-4">
                <div className="calendar-wrapper">
                    <div className="calendar-days grid grid-cols-7">
                        {
                            dateDisplay?.map((item, key) => {
                                return (
                                    <div key={key} className={`col-span-1 text-center`}>
                                        <div className={`py-4 w-12 mx-auto rounded-t-full ${moment(item).isSame(date) ? 'bg-slate-800 text-white' : ''}`}>
                                            {moment(item).format('dd').charAt(0)}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="calendar-date grid grid-cols-7">
                        {
                            dateDisplay?.map((item, key) => {
                                return (
                                    <div key={key} className={`col-span-1 text-center hover:cursor-pointer`} onClick={() => onChangeDate(item)}>
                                        <div className={`w-12 mx-auto pb-4 pt-2 rounded-b-full ${moment(item).isSame(date) ? 'bg-slate-800' : ''}`}>
                                            <span className={`p-2 rounded-full bg-secondary-light ${moment(item).isSame(date) ? '!bg-primary text-white' : ''}`}>
                                                {moment(item).format('DD')}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

Calendar.propTypes = {
    onClick: PropTypes.func,
}

export default Calendar;
