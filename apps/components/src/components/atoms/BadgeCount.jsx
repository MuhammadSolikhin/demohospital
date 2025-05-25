const BadgeCount = ({
    total
}) => {
    return (
        <span className="flex items-center justify-center bg-red-600 rounded-xl text-white px-2 text-xs">
            {total}
        </span>
    )
}

BadgeCount.propTypes = {
    total: Number
}

export default BadgeCount;
