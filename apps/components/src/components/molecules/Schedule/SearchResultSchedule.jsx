import PropTypes from 'prop-types';
import Typography from '../../atoms/Typography';
import moment from 'moment';
import { useState } from 'react';
import Alert from '../../../providers/alert/Alert';

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

const SearchResultSchedule = ({
    data = [],
    search
}) => {
    const [appointmentColors, setAppointmentColors] = useState([]);
    
    const getColor = (item) => {
        const existingColor = appointmentColors.find(appointment => appointment.title === item.title);
        if (existingColor) {
            return colors.find((color) => color.key === existingColor.color)?.classes;
        }

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

    return (
        <div className="search-result-schedule">
            <Typography variant='h4' className='!text-base'>Search Result ({search})</Typography>
            <div className="search-results">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="result grid grid-cols-3 items-center p-4 border-b hover:cursor-pointer"
                        onClick={() => onClickDetail(item)}
                    >
                        <div className="col-span-1 flex items-center gap-4">
                            <Typography variant='h4' className='w-8'>{moment(item?.date).format('DD')}</Typography>
                            <Typography variant='small' className='font-semibold'>{moment(item?.date).format('MMM YYYY')}</Typography>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded ${getColor(item)}`}></div>
                                <Typography variant='small'>{item?.title}</Typography>
                            </div>
                            <Typography variant='small' className='truncate'>{item?.description}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

SearchResultSchedule.propTypes = {
    data: PropTypes.array,
    search: PropTypes.string
};

export default SearchResultSchedule;
