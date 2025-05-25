import React from 'react';
import PropTypes from 'prop-types';

const Table = React.lazy(() => import('components/Table'));
const Card = React.lazy(() => import('components/Card'));
const Input = React.lazy(() => import('components/Input'));
const Typography = React.lazy(() => import('components/Typography'));

const PatientTable = ({
    title,
    rows,
    columns,
    onSearch = () => null,
    onEdit = () => null,
    onDelete = () => null,
    onPrint = () => null,
}) => {
    return (
        <Card className='p-4'>
            <div className="table-options flex items-center justify-between mb-4">
                <Typography className='font-semibold'>{title}</Typography>
                <div className="search">
                    <Input 
                        placeholder='Search'
                        onChange={onSearch}
                    />
                </div>
            </div>
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

PatientTable.propTypes = {
    title: PropTypes.string,
    rows: PropTypes.array,
    columns: PropTypes.array,
    onSearch: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onPrint: PropTypes.func,
}

export default PatientTable;
