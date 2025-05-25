import React from 'react';
import PropTypes from 'prop-types';

const Table = React.lazy(() => import('components/Table'));
const Card = React.lazy(() => import('components/Card'));


const VisitTable = ({
    rows,
    columns,
    onEdit = () => null,
    onDelete = () => null,
    onPrint = () => null,
}) => {
    return (
        <Card className='p-4'>
            <Table
                rows={rows}
                columns={columns}
                actions={{
                    edit: (id) => onEdit(id),
                    delete: (id) => onDelete(id),
                    print: (id) => onPrint(id)
                }}
            />
        </Card>
    )
}

VisitTable.propTypes = {
    title: PropTypes.string,
    rows: PropTypes.array,
    columns: PropTypes.array,
    onSearch: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onPrint: PropTypes.func,
}

export default VisitTable;
