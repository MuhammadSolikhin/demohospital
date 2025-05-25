import Button from "../atoms/Button";
import Card from "../atoms/Card";
import CardBody from "../atoms/CardBody";
import Icon from "../atoms/Icon";
import Typography from "../atoms/Typography";
import PropTypes from "prop-types";

const BoardCard = ({
    title,
    total,
    totalGrowth = null,
    totalIcon='iconamoon:trend-up',
    description = '',
    data = [],
    color = 'primary',
    icon = 'ion:stats-chart',
    onClick = () => null,
}) => {
    const colors = {
        'primary': 'text-primary',
        'secondary': 'text-secondary',
        'danger': 'text-danger',
        'success': 'text-success',
    }

    return (
        <>
            <div className="modal see-more hidden">{data}</div>
            <Card>
                <CardBody className="space-y-2 p-4">
                    <div className="flex items-center justify-between">
                        <div className="title">
                            <Typography className="font-semibold">{ title }</Typography>
                            <Typography variant="small">{ description }</Typography>
                        </div>
                        <Icon name={icon} size={30} className={`total ${colors[color]}`} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className={`total flex items-center gap-x-2 ${colors[color]}`}>
                            <Icon name={totalIcon} size={24} />
                            <div className="relative">
                                <Typography variant="h4" className="font-semibold">{total}</Typography>
                                {
                                    totalGrowth && (
                                        <Typography
                                            variant="small"
                                            className="absolute bottom-4 -right-6"
                                        >
                                            {totalGrowth === 0 ? '' : totalGrowth > 0 ? '+' : ''}
                                            {totalGrowth}
                                        </Typography>
                                    )
                                }
                            </div>
                        </div>
                        <Button variant="transparent" label="See More" className="!text-sm" onClick={onClick} />
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

BoardCard.propTypes = {
    title: PropTypes.string,
    total: PropTypes.number,
    totalGrowth: PropTypes.number,
    totalIcon: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.array,
    color: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default BoardCard;
