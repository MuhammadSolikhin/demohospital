import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

const useLanguage = () => {
    const {
        i18n
    } = useTranslation();

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    const onChangeLanguage = (lng) => {
        localStorage.setItem('language', lng);
        setLanguage(lng);
        window.dispatchEvent(new CustomEvent('language', { detail: lng }));
    }

    const handleLanguage = (e) => {
        setLanguage(e.detail);
    }

    useEffect(() => {
        i18n.changeLanguage(language);
        window.addEventListener('language', handleLanguage);
        return () => window.removeEventListener('language', handleLanguage);
    }, [language, i18n]);

    return {
        language,
        setLanguage,
        onChangeLanguage
    }
}

export default useLanguage;
