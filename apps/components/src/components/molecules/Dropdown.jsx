import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const Dropdown = ({
    label,
    options,
    onClick,
    className = '',
    classNameLabel = '',
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onClickOpen = () => {
        setIsOpen((prev) => !prev);
    }

    const onClickOption = (value) => {
        onClick(value);
        setIsOpen(false);
    }

    return (
        <div className={`dropdown relative z-10 ${className}`}>
            <button
                type='button'
                className={`transition p-primary px-4 py-2 whitespace-nowrap border border-primary text-primary hover:bg-primary hover:text-white rounded-primary ${classNameLabel}`}
                onClick={onClickOpen}
            >
                {
                    children ? (children) : (
                        <div className="flex items-center justify-between gap-x-4">
                            <span className='whitespace-nowrap'>{label}</span>
                            <span>
                                <Icon name='lsicon:down-filled' />
                            </span>
                        </div>
                    )
                }
            </button>
            {
                isOpen ? (
                    <div className="dropdown-body absolute top-12 right-0 min-w-44 w-full m-auto">
                        <ul className='bg-primary-semilight shadow-xl rounded-primary overflow-hidden'>
                            {
                                options?.map((option, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='transition text-center p-2 text-primary hover:bg-primary hover:text-white hover:cursor-pointer'
                                            onClick={() => onClickOption(option.value)}
                                        >
                                            {option.label}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                ) : (null)
            }
        </div>
    )
}

Dropdown.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    onClick: PropTypes.func,
    className: PropTypes.string,
    classNameLabel: PropTypes.string,
    children: PropTypes.node,
}

export default Dropdown;
