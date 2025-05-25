import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layouts/Index";
import remotes from "../../remotes.config";
import {
    __federation_method_getRemote,
    __federation_method_setRemote,
} from "__federation__";

const loadServiceComponent = (name, url, module) => {
    return lazy(() => {
        __federation_method_setRemote(name, {
            url: () => Promise.resolve(url),
            format: "esm",
            from: "vite",
        });
        
        return __federation_method_getRemote(name, module);
    });
}

const routes = createBrowserRouter(remotes?.map(({ module, name, url, path }, index) => {
    return ({
        path,
        element: <Layout />,
        children: [
            {
                key: `remote-${index}`,
                path: '*',
                element: (
                    <Suspense fallback={<Loading />}>
                        {React.createElement(loadServiceComponent(name, url, module))}
                    </Suspense>
                )
            }
        ]
    })
}));

export default routes;
