import PropTypes from 'prop-types';
import Typography from '../atoms/Typography';
import { useState } from 'react';
import Icon from '../atoms/Icon';

const Input = ({
    type = 'text',
    label,
    name,
    value,
    placeholder,
    readonly = false,
    className,
    errors,
    onChange = () => null,
    onFocus = () => null,
    register,
    isRequired = false,
    tabIndex = null,
    inputGroupText = null,
}) => {
    const isInputTypePassword = type === 'password';

    const [inputType, setInputType] = useState(type);

    const onClickShowPassword = () => {
        setInputType((prev) => prev == 'password' ? 'text' : 'password');
    }

    return (
        <div className="form-group w-full space-y-2">
            {
                label ? (
                    <label className="form-label" htmlFor={name}>
                        <Typography variant='small' className='font-medium'>{label} {isRequired ? <span className='text-danger'>*</span> : (null)}</Typography>
                    </label>
                ) : (null)
            }

            <div className={`input-group relative ${inputGroupText ? 'input-group-text flex items-center rounded-lg border border-gray-400 overflow-hidden' : ''}`}>
                {
                    inputGroupText ? (
                        <div className="input-group-append">
                            <span className="input-group-text p-3 bg-gray-50 text-gray-600 border-r border-gray-400 rounded-l-lg">
                                {inputGroupText}
                            </span>
                        </div>
                    ) : (null)
                }

                {
                    type === 'color' ? (
                        <input
                            type='color'
                            name={name}
                            value={value}
                            readOnly={readonly}
                            onChange={onChange}
                            className='w-full rounded-lg h-12'
                            {...(register ? register(name) : {})}
                            {...(tabIndex !== undefined ? { tabIndex } : {})}
                        />
                    ) : (
                        <input
                            type={inputType}
                            className={`form-input p-2 w-full ${inputGroupText ? 'rounded-l-none border-l-0' : 'rounded-lg border border-gray-400'} ${className}`}
                            name={name}
                            id={name}
                            value={value}
                            readOnly={readonly}
                            placeholder={placeholder ?? name ?? 'Enter'}
                            onChange={onChange}
                            onFocus={onFocus}
                            {...(register ? register(name) : {})}
                            {...(tabIndex !== undefined ? { tabIndex } : {})}
                        />
                    )
                }

                {
                    isInputTypePassword ? (
                        <button 
                            type='button' 
                            className='absolute top-4 right-4'
                            onClick={onClickShowPassword}
                        >
                            <Icon 
                                name={inputType == 'password' ? 'mdi:eye-off-outline' : 'mdi:eye-outline'}
                                size={18}
                            />
                        </button>
                    ) : (null)
                }
            </div>

            {errors?.[name] && (
                <span className="form-error text-sm text-danger">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    className: PropTypes.string,
    errors: PropTypes.any,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    register: PropTypes.func,
    isRequired: PropTypes.bool,
    tabIndex: PropTypes.number,
    inputGroupText: PropTypes.string,
}

export default Input;
