import { useState, useEffect, forwardRef } from 'react';
import ReactSelect from 'react-select'
import PropTypes from 'prop-types';
import Typography from '../atoms/Typography';

const Select = forwardRef(({
    label,
    name,
    placeholder = 'Select...',
    options = [],
    loading = false,
    value,
    onChange,
    onInputChange,
    onMenuOpen,
    errors,
    isRequired = false,
    tabIndex = 1,
}, ref) => {
    const [isLoading, setIsLoading] = useState(loading || false);

    const onHandleInputChange = (e) => {
        if (!onInputChange) return;
        setIsLoading(true);
        const result = onInputChange(e);
        if (result instanceof Promise) {
            result.finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    };

    const onHandleMenuOpen = (e) => {
        if (onMenuOpen) onMenuOpen(e);
    }

    const onHandleChange = (e) => {
        if (onChange) onChange(e);
    }

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    return (
        <div className="form-group w-full space-y-2">
            {
                label ? (
                    <label className="form-label" htmlFor={name}>
                        <Typography variant='small' className='font-medium'>{label} {isRequired ? <span className='text-danger'>*</span> : (null)}</Typography>
                    </label>
                ) : (null)
            }
            <ReactSelect
                ref={ref}
                options={options}
                isLoading={isLoading}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onHandleChange}
                onInputChange={onHandleInputChange}
                onMenuOpen={onHandleMenuOpen}
                isClearable
                classNames={{
                    placeholder: () => 'text-ellipsis text-nowrap',
                    singleValue: () => 'text-ellipsis text-nowrap',
                }}
                {...(tabIndex !== undefined ? { tabIndex } : {})}
            />

            {errors?.[name] && (
                <span className="form-error text-sm text-danger">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
})

Select.displayName = 'Select';

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    loading: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onInputChange: PropTypes.func,
    onMenuOpen: PropTypes.func,
    errors: PropTypes.any,
    isRequired: PropTypes.bool,
    tabIndex: PropTypes.number,
};

export default Select;
