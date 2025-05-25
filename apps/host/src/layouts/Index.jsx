import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import AuthLayout from '../layouts/AuthLayout';
import DefaultLayout from '../layouts/DefaultLayout';

const Layout = () => {
    const location = useLocation();
    const [layout, setLayout] = useState(null);

    useEffect(() => {
        const paths = location.pathname.split('/');
        setLayout(() => (
            paths.includes('guest') || paths.includes('auth') || location.pathname == '/'
                ? <DefaultLayout />
                : <AuthLayout />
        ));
    }, [location]);

    return (
        <Suspense fallback={<Loading />}>
            {layout}
        </Suspense>
    );
}

export default Layout;
