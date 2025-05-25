import PropTypes from 'prop-types';
import { useState } from "react";
import Card from "../atoms/Card";
import CardHeader from "../atoms/CardHeader";
import CardBody from "../atoms/CardBody";
import Typography from "../atoms/Typography";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({
    datasets,
    labels,
    title = '',
    filters = [],
    filter = true,
    onChangeFilter = () => null,
    options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    },
}) => {
    const [data] = useState({
        labels, 
        datasets: datasets.map((item) => {
            return ({
                label: item?.label || 'Label',
                data: item?.data || [null],
                backgroundColor: item?.backgroundColor || ["#546FFF"],
                borderWidth: 2,
                borderColor: '#000',
            })
        })
    });

    return (
        <Card
            className="!bg-secondary-semidark p-8 space-y-2 !shadow-none"
            title={title}
        >
            <CardHeader className="flex items-center justify-between">
                <Typography>{title}</Typography>
                {
                    filter ? (
                        <div className="filter">
                            <select
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                name="filter"
                                id="filter"
                                onChange={onChangeFilter}
                            >
                                {
                                    filters?.map((item, key) => {
                                        return (
                                            <option key={key} value={item.value}>{item.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    ) : (null)
                }
            </CardHeader>
            <CardBody className="rounded-md bg-white p-8">
                <Line
                    data={data}
                    options={options}
                    className='!w-full !h-fit'
                />
            </CardBody>
        </Card>
    )
}

LineChart.propTypes = {
    datasets: PropTypes.array,
    labels: PropTypes.array,
    title: PropTypes.string,
    filters: PropTypes.array,
    filter: PropTypes.bool,
    options: PropTypes.any,
    onChangeFilter: PropTypes.func,
}

export default LineChart;
