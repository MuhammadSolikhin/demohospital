import { useState } from "react";
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Button from "../../atoms/Button";
import CardBody from "../../atoms/CardBody";
import CardHeader from "../../atoms/CardHeader";
import Card from "../Card";
import Search from "../Search";
import DailySchedule from "./DailySchedule";
import WeeklySchedule from "./WeeklySchedule";
import moment from "moment";
import MonthlySchedule from "./MonthlySchedule";
import AnnualSchedule from "./AnnualSchedule";
import Icon from "../../atoms/Icon";
import SearchResultSchedule from "./SearchResultSchedule";

const Schedule = ({
    data = [],
    isLoading = false,
    date = moment().format('YYYY-MM-DD'),
    onChangeDate,
    search = null,
    onChangeSearch
}) => {
    const [option, setOption] = useState('day');
    const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);

    const optionLists = ['day', 'week', 'month', 'year'];
    const weekLabel = Math.ceil(moment(date).diff(moment(date).startOf('month'), 'days')/7);
    
    const onClickOption = (opt) => {
        setOption(opt);
    }

    const onClickFilter = () => {
        setIsDateFilterOpen((prev) => !prev);
    }

    const onHandleDateFilter = (date) => {
        onChangeDate(moment(date).format('YYYY-MM-DD'));
        setIsDateFilterOpen(false);
    }
    
    const onHandleNextDateFilter = () => {
        onChangeDate(moment(date).add(1, `${option}s`).format('YYYY-MM-DD'));
        setIsDateFilterOpen(false);
    }

    const onHandlePrevDateFilter = () => {
        onChangeDate(moment(date).subtract(1, `${option}s`).format('YYYY-MM-DD'));
        setIsDateFilterOpen(false);
    }

    return (
        <Card>
            <CardHeader className="px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="filter relative">
                        <div className="flex items-center gap-2">
                            <Button
                                icon={'ic:round-chevron-left'}
                                variant="none"
                                className="!bg-secondary-light !rounded-none text-xl"
                                onClick={onHandlePrevDateFilter}
                            />
                            <Button
                                label={
                                    option == 'day' ? moment(date).format('MMM DD, YYYY') : (
                                        option == 'week' ? `${weekLabel}${weekLabel == 1 ? 'st' : (weekLabel == 2 ? 'nd' : (weekLabel == 3 ? 'rd' : 'th')) } week of ${moment(date).format('MMM')}` : (
                                            option == 'month' ? moment(date).format('MMM YYYY') : (
                                                moment(date).format('YYYY')
                                            )
                                        )
                                    )
                                }
                                variant="none"
                                className="text-sm !bg-secondary-light !rounded-none"
                                onClick={onClickFilter}
                            />
                            <Button
                                icon={'ic:round-chevron-right'}
                                variant="none"
                                className="!bg-secondary-light !rounded-none text-xl"
                                onClick={onHandleNextDateFilter}
                            />
                        </div>
                        <div className="absolute top-10 left-0">
                            {
                                isDateFilterOpen ? (
                                    <DatePicker
                                        inline
                                        selected={date}
                                        showWeekPicker={option == 'week'}
                                        showMonthYearPicker={option == 'month'}
                                        showYearPicker={option == 'year'}
                                        onChange={onHandleDateFilter}
                                    />
                                ) : (null)
                            }
                        </div>
                    </div>
                    <div className="options flex gap-x-2 items-center">
                        {
                            optionLists?.map((opt, index) => {
                                return (
                                    <Button 
                                        key={index}
                                        variant={option == opt ? 'primary' : 'none'}
                                        label={`${opt.charAt(0).toUpperCase()}${opt.substring(1)}`}
                                        onClick={() => onClickOption(opt)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="search">
                        <Search
                            placeholder="Search"
                            onChange={onChangeSearch}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-y-auto h-screen px-4">
                {
                    isLoading ? (
                        <div className="w-full h-full flex items-center justify-center text-primary">
                            <Icon name={'eos-icons:three-dots-loading'} size={'75'} />
                        </div>
                    ) : (
                        search ? (
                            <SearchResultSchedule
                                search={search}
                                data={data}
                            />
                        ) : (
                            <>
                                {option === 'day' && (
                                    <DailySchedule data={data} date={date} />
                                )}
                                {option === 'week' && (
                                    <WeeklySchedule data={data} date={date} />
                                )}
                                {option === 'month' && (
                                    <MonthlySchedule data={data} date={date} />
                                )}
                                {option === 'year' && (
                                    <AnnualSchedule data={data} date={date} />
                                )}
                            </>
                        )
                    )
                }
            </CardBody>
        </Card>
    )
}

Schedule.propTypes = {
    data: PropTypes.array,
    date: PropTypes.any,
    onChangeDate: PropTypes.func,
    search: PropTypes.string,
    onChangeSearch: PropTypes.func,
    isLoading: PropTypes.bool
}

export default Schedule;
