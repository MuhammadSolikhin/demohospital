import React from "react";
import PropTypes from 'prop-types';

const Card = React.lazy(() => import('components/Card'));
const Checkbox = React.lazy(() => import('components/Checkbox'));

const PharmacyStepCard = ({
    currentStep = 1
}) => {
    const steps = ['Input Medicine', 'Doctor Check', 'Billing'];
    return (
        <div className="step space-y-2">
        {
            steps?.map((step, i) => (
                <Card key={i} className={`p-4 ${currentStep >= (i+1) ? '!bg-primary-light' : '!bg-gray-200'}`}>
                    <div className="flex gap-4">
                        <Checkbox
                            label={step}
                            checked={currentStep >= (i+1)}
                        />
                    </div>
                </Card>
            ))
        }
        </div>
    )
}

PharmacyStepCard.propTypes = {
    currentStep: PropTypes.number,
    setNextStep: PropTypes.func,
}

export default PharmacyStepCard;
