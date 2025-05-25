import React from 'react';
import PropTypes from 'prop-types';
import UserProfileCard from '../../molecules/Cards/UserProfileCard';
import UserPharmacyDetailForm from '../../molecules/Forms/UserPharmacyDetailForm';
import PharmacyStepCard from '../../molecules/Cards/PharmacyStepCard';

const Card = React.lazy(() => import('components/Card'));

const PharmacyDetailSidebar = ({
    currentStep = 1
}) => {
    return (
        <div className="patient-detail">
            <Card className='p-4'>
                <div className="space-y-8">
                    <UserProfileCard />
                    <UserPharmacyDetailForm />
                    <PharmacyStepCard
                        currentStep={currentStep}
                    />
                </div>
            </Card>
        </div>
    )
}

PharmacyDetailSidebar.propTypes = {
    currentStep: PropTypes.number,
    setNextStep: PropTypes.func
}

export default PharmacyDetailSidebar;
