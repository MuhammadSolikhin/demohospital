import React from "react";
import PropTypes from "prop-types";

const Card = React.lazy(() => import('components/Card'))
const Typography = React.lazy(() => import('components/Typography'))
const Icon = React.lazy(() => import('components/Icon'))
const Link = React.lazy(() => import('components/Link'));

const Menu = ({
    title = '',
    icon = '',
    to=''
}) => {
    return (
        <Link to={to}>
            <Card className="col-span-1 !bg-transparent !shadow-none">
                <div className="space-y-2 p-8 rounded-primary flex flex-col items-center justify-center transition bg-primary-light hover:bg-primary hover:text-white text-primary hover:cursor-pointer text-center">
                    <Icon name={icon} size={40} />
                    <div className="description w-full max-w-full overflow-hidden whitespace-nowrap">
                        <Typography variant="p" className="font-semibold truncate">
                            {title}
                        </Typography>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

Menu.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
}

export default Menu;
