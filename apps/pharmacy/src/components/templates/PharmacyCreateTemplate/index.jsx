import React, { useState } from "react";
import PharmacyDetailSidebar from "../../organisms/PharmacyDetailSidebar";
import PharmacyForm from "../../organisms/PharmacyForm";

const Breadcrumb = React.lazy(() => import('components/Breadcrumb'));

const PharmacyCreateTemplate = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = (value) => {
        setCurrentStep((prev) => value ? value : prev + 1);
    };

    return (
        <div className="pharmacy-create-page space-y-8">
            <Breadcrumb
                title={currentStep < 4 ? 'Generate Billing' : 'Invoice'}
                back='/pharmacy'
            />
            <div className="grid grid-cols-8 gap-4">
                <div className={`${currentStep < 4 ? 'col-span-3' : 'hidden'}`}>
                    <PharmacyDetailSidebar
                        currentStep={currentStep}
                    />
                </div>
                <div className={`${currentStep < 4 ? 'col-span-5' : 'col-span-8'}`}>
                    <PharmacyForm
                        currentStep={currentStep}
                        setNextStep={handleNextStep}
                    />
                </div>
            </div>
        </div>
    )
}

export default PharmacyCreateTemplate;
