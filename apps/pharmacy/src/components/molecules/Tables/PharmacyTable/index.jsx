import React from 'react';
import PropTypes from 'prop-types';

const Table = React.lazy(() => import('components/Table'));
const Card = React.lazy(() => import('components/Card'));
const Input = React.lazy(() => import('components/Input'));
const Typography = React.lazy(() => import('components/Typography'));
const Dropdown = React.lazy(() => import('components/Dropdown'));
const Button = React.lazy(() => import('components/Button'));

const PharmacyTable = ({
    title,
    rows,
    columns,
    onSearch = () => null,
    onEdit = () => null,
    onDelete = () => null,
    onPrint = () => null,
}) => {
    const onClickExport = (e) => {
        console.log(e);
    }
    
    return (
        <div className='space-y-2'>
            <Card className='p-4'>
                <div className="table-options flex items-center justify-between mb-4">
                    <Typography className='font-semibold'>{title}</Typography>
                    <div className="actions flex gap-4">
                        <Input 
                            placeholder='Search'
                            onChange={onSearch}
                        />

                        <div className="export">
                            <Dropdown
                                classNameLabel="w-full"
                                onClick={onClickExport}
                                label='Export'
                                options={[
                                    {
                                        label: 'PDF',
                                        value: 'pdf'
                                    },
                                    {
                                        label: 'Excel',
                                        value: 'excel'
                                    },
                                ]}
                            />
                        </div>
                        
                        <div className="print">
                            <Button
                                label='Print'
                                icon='uil:print'
                            />
                        </div>
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
        </div>
    )
}

PharmacyTable.propTypes = {
    title: PropTypes.string,
    rows: PropTypes.array,
    columns: PropTypes.array,
    onSearch: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onPrint: PropTypes.func,
}

export default PharmacyTable;
