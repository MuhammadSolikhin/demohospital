import React from "react";

const PageLoading = React.lazy(() => import('components/Loading'));

const Loading = () => {
    return (
        <PageLoading />
    )
}

export default Loading;
