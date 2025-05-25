import Icon from "../atoms/Icon";
import PropTypes from 'prop-types';

const Search = ({
    placeholder = 'Search by Patient Name',
    onChange = () => null
}) => {
    return (
        <div className="bg-secondary-light flex items-center px-4 py-2 rounded-lg gap-2 w-52">
            <input type="text" name="search" id="search" placeholder={placeholder} className="outline-none bg-transparent w-full text-black text-xs" onChange={onChange} />
            <span className="text-secondary-dark">
                <Icon name='mynaui:search' />
            </span>
        </div>
    )
}

Search.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Search;
