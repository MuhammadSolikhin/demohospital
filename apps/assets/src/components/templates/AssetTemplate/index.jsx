import React from "react";
import AssetTable from "../../molecules/AssetTable";
import { useNavigate } from "react-router-dom";

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Button = React.lazy(() => import('components/Button'));

const rows = [
    {
        id: 1,
        name: 'Item 1',
        supplier: 'Supplier 1',
        condition: 'Condition 1',
        po_date: 'PO Date 1',
        location: 'Location 1',
        pic: 'PIC 1',
        category: 'Category 1',
        note: 'Note 1',
    },
    {
        id: 2,
        name: 'Item 2',
        supplier: 'Supplier 2',
        condition: 'Condition 2',
        po_date: 'PO Date 2',
        location: 'Location 2',
        pic: 'PIC 2',
        category: 'Category 2',
        note: 'Note 2', 
    },
    {
        id: 3,
        name: 'Item 3',
        supplier: 'Supplier 3',
        condition: 'Condition 3',
        po_date: 'PO Date 3',
        location: 'Location 3',
        pic: 'PIC 3',
        category: 'Category 3',
        note: 'Note 3',
    }
];

const AssetTemplate = () => {
    const navigate = useNavigate();
    const columns = [
        {
            field: 'name',
            headerName: 'Item Name',
            width: 200,
        },
        {
            field: 'supplier',
            headerName: 'Supplier',
            width: 200,
        },
        {
            field: 'condition',
            headerName: 'Condition',
            width: 200,
        },
        {
            field: 'po_date',
            headerName: 'PO Date',
            width: 200,
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 200,
        },
        {
            field: 'pic',
            headerName: 'PIC',
            width: 200,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 200,
        },
        {
            field: 'note',
            headerName: 'Notes',
            width: 200,
        }
    ];

    return (
        <div className="report space-y-8">
            <div className="flex items-center justify-between">
                <Breadcrumb title='Assets' />
                <Button
                    onClick={() => navigate('/inventory/create')}
                    variant="none"
                    className="text-primary"
                    icon="gridicons:add"
                    label="Add Asset"
                />
            </div>
            <div className="assets">
                <AssetTable
                    rows={rows}
                    columns={columns}
                    title='Assets'
                    onSearch={() => null}
                    onEdit={() => null}
                    onDelete={() => null}
                    onPrint={() => null}
                />
            </div>
        </div>
    )
}

export default AssetTemplate;
