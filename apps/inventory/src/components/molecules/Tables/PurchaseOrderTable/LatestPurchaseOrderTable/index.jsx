import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const Table = React.lazy(() => import('components/Table'));
const Card = React.lazy(() => import('components/Card'));
const Input = React.lazy(() => import('components/Input'));

const LatestPurchaseOrderTable = ({
    rows,
    columns,
    onSearch = () => null,
    onEdit = () => null,
    onDelete = () => null,
}) => {
    const { t } = useTranslation();
    
    return (
        <div className='space-y-2'>
            <Card className='p-4'>
                <Input 
                    placeholder='Search'
                    onChange={onSearch}
                    className="mb-4 w-full"
                />

                <Table
                    rows={rows}
                    columns={columns}
                    actions={{
                        edit: (id) => onEdit(id),
                        delete: (id) => onDelete(id),
                    }}
                />
            </Card>
        </div>
    )
}

LatestPurchaseOrderTable.propTypes = {
    title: PropTypes.string,
    rows: PropTypes.array,
    columns: PropTypes.array,
    onSearch: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onPrint: PropTypes.func,
}

export default LatestPurchaseOrderTable;
