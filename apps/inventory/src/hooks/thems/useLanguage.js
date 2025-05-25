import { useCallback } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
    const lng = localStorage.getItem('language');

    const {
        i18n
    } = useTranslation();

    const handleLanguage = useCallback((e) => {
        console.log('dash', e.detail);
        i18n.changeLanguage(e.detail);
    }, [i18n]);

    useEffect(() => {
        window.addEventListener('language', handleLanguage);
    }, [handleLanguage]);

    return {
        lng
    }
}

export default useLanguage;
