import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import Alert from '../../providers/alert/Alert';

const Table = ({
    rows,
    columns,
    pagination = {
        page: 0,
        pageSize: 10,
    },
    checkbox = false,
    actions = {
        edit: false,
        delete: false,
        print: false,
    }
}) => {
    const actionColumn = {
        field: 'action', 
        headerName: 'Action', 
        width: 100,
        headerAlign: 'center',
        renderCell: (params, key) => {
            return (
                <div className="flex gap-x-2 items-center justify-center" key={key}>
                    {
                        actions.edit && (
                            <Button
                                variant='none'
                                className='!px-0 text-primary text-xl'
                                icon='mage:edit'
                                onClick={() => actions.edit(params)}
                            />
                        )
                    }

                    {
                        actions.delete && (
                            <Button
                                variant='none'
                                className='!px-0 text-primary text-xl'
                                icon='mage:trash-3'
                                onClick={() => {
                                    Alert.confirmation('Are You Sure?', 'You will delete data permanently', 'Yes, Delete!', 'Cancel', '#FF6861')
                                        .then((confirm) => {
                                            if (confirm) {
                                                actions.delete(params.row.id)
                                            }
                                        })
                                }}
                            />
                        )
                    }

                    {
                        actions.print && (
                            <Button
                                variant='none'
                                className='!px-0 text-primary text-xl'
                                icon='uil:print'
                                onClick={() => actions.print(params)}
                            />
                        )
                    }
                </div>
            )
        }
    }

    return (
        <div className='w-full bg-white'>
            <DataGrid
                rows={rows}
                columns={[...columns, actionColumn].map((item) => ({ ...item, disableColumnMenu: true, flex: 1 }))}
                initialState={{ pagination: { paginationModel: pagination } }}
                pageSizeOptions={[10, 50, 100]}
                checkboxSelection={checkbox}
                sx={{ border: 0 }}
            />
        </div>
    )
}

Table.propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    pagination: PropTypes.shape({
        page: PropTypes.number,
        pageSize: PropTypes.number
    }),
    checkbox: PropTypes.bool,
    actions: PropTypes.shape({
        edit: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        delete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        print: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    })
}

export default Table;
