import React from 'react';
import AssetForm from '../../../molecules/Form/AssetForm';
import { useNavigate } from 'react-router-dom';
import Pharmacy from '../../../organisms/Pharmacy';

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));
const Tab = React.lazy(() => import('components/Tab'));
const TabSection = React.lazy(() => import('components/TabSection'));
const Card = React.lazy(() => import('components/Card'));

const InventoryCreateTemplate = () => {
    const navigate = useNavigate();
    return (
        <div className="inventory-create space-y-8">
            <Breadcrumb title='Add New Inventory' back='/inventory/overview' />
            <Card className='p-8'>
                <Tab>
                    <TabSection title='Asset'>
                        <AssetForm
                            onClickCancel={() => navigate('/inventory/overview')}
                        />
                    </TabSection>
                    <TabSection title='Pharmacy'>
                        <Pharmacy />
                    </TabSection>
                </Tab>
            </Card>
        </div>
    )
}

export default InventoryCreateTemplate;
