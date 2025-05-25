import PropTypes from 'prop-types';

import { useState } from "react";
import { asset } from "../../helpers/url.helper";

const languages = [
    {
        id: 'en',
        image: asset('english-language.png'),
        name: 'English',
    },
    {
        id: 'id',
        image: asset('indonesia-language.png'),
        name: 'Indonesia',
    },
];

const Language = ({
    value = 'en',
    onChange = () => null
}) => {
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [language, setLanguage] = useState(languages.find((item) => item.id == value));

    const onChangeLanguage = (val) => {
        setLanguage(val);
        setIsOpenLanguage(false);
        onChange(val.id);
    }

    const onClickOpenLanguage = () => {
        return setIsOpenLanguage((val) => !val);
    }

    return (
        <div className="relative language rounded w-24" onClick={() => onClickOpenLanguage}>
            <div className="absolute -top-5 left-0">
                <div className="language-active">
                    <button
                        onClick={onClickOpenLanguage}
                        className='flex gap-2 items-center p-2 transition bg-secondary-light hover:bg-gray-300 hover:cursor-pointer w-full'
                    >
                        <img src={language.image} alt="English" width={20} />
                        <span className="text-semibold self-center">{language.id.toUpperCase()}</span>
                    </button>
                </div>
                <div className={`language-list ${isOpenLanguage ? 'block' : 'hidden'}`}>
                    {
                        languages?.map((_languages, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => onChangeLanguage(_languages)}
                                    className={`flex gap-2 items-center p-primary transition bg-secondary-light hover:bg-gray-300 hover:cursor-pointer w-full ${_languages.id == language.id ? 'hidden' : ''}`}
                                >
                                    <img src={_languages.image} alt="English" width={20} />
                                    <span className="text-semibold self-center">{_languages.id.toUpperCase()}</span>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

Language.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Language;
