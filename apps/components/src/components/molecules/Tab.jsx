import { useState, useEffect } from "react";
import Typography from "../atoms/Typography";
import PropTypes from 'prop-types';

const Tab = ({
    children
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabLists, setTabLists] = useState([]);
    const [tabActions, setTabActions] = useState(null);

    const onClickTab = (index) => {
        setActiveTab(index);
    }

    useEffect(() => {
        setTabLists(children.filter(child => child.props.title));
        setTabActions(children.find(child => !child.props.title));
    }, [children]);

    return (
        <div className="tab">
            <div className="tab-header border-b border-gray-400 flex justify-between items-center mb-4">
                <div className="tab-header-list flex">
                    {
                        tabLists?.map((item, index) => {
                            return (
                                <button className={`p-2 bg-transparent ${index === activeTab ? 'border-b-2 border-primary text-primary' : 'text-gray-400'}`} onClick={() => onClickTab(index)} key={index}>
                                    <Typography variant="p" className="font-semibold">
                                        {item.props.title}
                                    </Typography>
                                </button>
                            )
                        })
                    }
                </div>
                {tabActions && (
                    <div className="action">
                        {tabActions}
                    </div>
                )}
            </div>
            <div className="tab-body">
                {tabLists[activeTab]}
            </div>
        </div>
    )
}

Tab.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export default Tab;
