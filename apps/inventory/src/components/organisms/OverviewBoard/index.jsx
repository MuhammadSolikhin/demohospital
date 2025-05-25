import React from 'react';
const BoardCard = React.lazy(() => import('components/BoardCard'));

const OverviewBoard = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1">
                <BoardCard
                    title='Total PO in Month'
                    total={104}
                    totalGrowth={10}
                />
            </div>
            <div className="col-span-1">
                <BoardCard
                    title='Total Supplier'
                    total={24}
                    color='danger'
                    totalIcon='iconamoon:trend-down'
                    totalGrowth={-5}
                />
            </div>
            <div className="col-span-1">
                <BoardCard
                    title='Total Item'
                    total={54}
                    totalGrowth={23}
                />
            </div>
        </div>
    )
}

export default OverviewBoard;