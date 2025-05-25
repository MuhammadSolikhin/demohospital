import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PharmacyForm from '../../molecules/Form/PharmacyForm';
import ListMedicineModal from '../../molecules/Modals/ListMedicineModal';
import MedicineFormModal from '../../molecules/Modals/MedicineFormModal';

const Button = React.lazy(() => import('components/Button'));

const Pharmacy = () => {
    const navigate = useNavigate();
    const sidebars = [
        {
            title: 'General Information',
            link: '#general-information',
        },
        {
            title: 'Attributes and Variants',
            link: '#attributes-and-variants',
        },
        {
            title: 'Medicine Details',
            link: '#medicine-details',
        },
        {
            title: 'Generic',
            link: '#generic',
        },
        {
            title: 'Sales',
            link: '#sales',
        },
        {
            title: 'Purchase',
            link: '#purchase',
        },
        {
            title: 'Stock',
            link: '#stock',
        },
        {
            title: 'Accountancy',
            link: '#accountancy',
        }
    ];

    const [activeSidebar, setActiveSidebar] = useState(window.location.hash || '#general-information');
    const [isListMedicineModalOpen, setIsListMedicineModalOpen] = useState(false);
    const [isMedicineFormModalOpen, setIsMedicineFormModalOpen] = useState(false);

    const onClickCloseMedicineFormModal = () => {
        setIsMedicineFormModalOpen(false);
    }

    const onClickOpenMedicineFormModal = () => {
        setIsMedicineFormModalOpen(true);
    }

    const onSidebarClick = (link) => {
        navigate(link);
        setActiveSidebar(link);
    }

    const onClickCloseListMedicineModal = () => {
        setIsListMedicineModalOpen(false);
    }

    const onClickOpenListMedicineModal = () => {
        setIsListMedicineModalOpen(true);
    }

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset + (-100);
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [activeSidebar]);

    return (
        <div className="inventory-pharmacy-create">
            <div className="action flex gap-2 justify-end">
                <Button
                    onClick={onClickOpenMedicineFormModal}
                    variant="none"
                    className="text-primary"
                    icon="gridicons:add"
                    label="Add Medicine"
                />

                <Button
                    onClick={onClickOpenListMedicineModal}
                    variant="primary-outline"
                    className="text-primary"
                    icon="material-symbols:list"
                    label="Medicine List"
                />
            </div>

            <div className="grid grid-cols-7 gap-4">
                <div className="sidebar col-span-2">
                    <div className="bg-secondary-light p-4 rounded-primary space-y-2 sticky top-20">
                        {
                            sidebars?.map((sidebar, index) => (
                                <Button
                                    variant={activeSidebar == sidebar?.link ? 'primary' : 'none'}
                                    label={sidebar?.title}
                                    onClick={() => onSidebarClick(sidebar?.link)}
                                    className='!w-full'
                                    textPosition='left'
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="content col-span-5">
                    <PharmacyForm
                        onClickCancel={() => navigate('/inventory/overview')}
                    />
                </div>
            </div>

            <ListMedicineModal 
                isOpen={isListMedicineModalOpen}
                onClose={onClickCloseListMedicineModal}
            />

            <MedicineFormModal
                isOpen={isMedicineFormModalOpen}
                onClose={onClickCloseMedicineFormModal}
            />
        </div>
    )
}

export default Pharmacy;

