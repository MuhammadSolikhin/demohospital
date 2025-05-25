import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const Table = React.lazy(() => import('components/Table'));
const Card = React.lazy(() => import('components/Card'));
const Input = React.lazy(() => import('components/Input'));
const Button = React.lazy(() => import('components/Button'));
const Typography = React.lazy(() => import('components/Typography'));
const Dropdown = React.lazy(() => import('components/Dropdown'));

const BirthTable = ({
    title,
    rows,
    columns,
    onSearch = () => null,
    onEdit = () => null,
    onDelete = () => null,
    onPrint = () => null,
}) => {
    const { t } = useTranslation();
    const onClickFilterByGender = (e) => {
        console.log(e);
    }

    return (
        <div className="space-y-2">
            <Card className='p-4'>
                <div className="table-options flex items-center justify-between">
                    <div className="action grid grid-cols-4 items-center gap-2">
                        <Input 
                            placeholder='Search'
                            onChange={onSearch}
                        />

                        <div className="filter-report">
                            <Dropdown
                                classNameLabel="w-full"
                                onClick={onClickFilterByGender}
                                label='All Report'
                                options={[
                                    {
                                        label: 'Report 1',
                                        value: 'all'
                                    },
                                    {
                                        label: 'Report 2',
                                        value: 'male'
                                    }
                                ]}
                            />
                        </div>
                        
                        <div className="filter-gender">
                            <Dropdown
                                classNameLabel="w-full"
                                onClick={onClickFilterByGender}
                                label='All Gender'
                                options={[
                                    {
                                        label: t('birth.label.gender.all'),
                                        value: 'all'
                                    },
                                    {
                                        label: t('birth.label.gender.male'),
                                        value: 'male'
                                    },
                                    {
                                        label: t('birth.label.gender.female'),
                                        value: 'female'
                                    }
                                ]}
                            />
                        </div>

                        <div className="export">
                            <Dropdown
                                classNameLabel="w-full"
                                onClick={onClickFilterByGender}
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
                    </div>
                </div>
            </Card>

            <Card className='p-4'>
                <div className="table-options flex items-center justify-between mb-4">
                    <Typography className='font-semibold'>{title}</Typography>
                    <div className="print">
                        <Button
                            label='Print'
                            icon='uil:print'
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
        </div>
    )
}

BirthTable.propTypes = {
    title: PropTypes.string,
    rows: PropTypes.array,
    columns: PropTypes.array,
    onSearch: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onPrint: PropTypes.func,
}

export default BirthTable;
