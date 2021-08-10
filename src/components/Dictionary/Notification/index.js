import "./index.scss";
import PropTypes from "prop-types";
import ReactDom from 'react-dom'
import {withPortal} from "../../../hocs/withPortal";
import {useEffect} from "react";

export const NotificationComponent = ({onClose}) => {
    useEffect(() => {setTimeout(() => onClose(), 2000)})

    return (
        ReactDom.createPortal((<div className='notification_wrapper'>
            <div>You have just added a word!</div>
        </div>), document.getElementById('root'))

    )
}

// NotificationComponent.propTypes = {
//     onclose: PropTypes.func,
// }

export const Notification = withPortal(NotificationComponent)