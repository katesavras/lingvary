import PropTypes from 'prop-types';
import "./index.scss"

export const Button = ({label, onClick}) => {
    return (
        <button className="btn" onClick={onClick}>{label}</button>
    )
}
//
// Button.propTypes = {
//     label: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// }
