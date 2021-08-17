import "./index.scss";
import PropTypes from "prop-types";
import ReactDom from 'react-dom'
import {withPortal} from "../../../../hocs/withPortal";
import {useEffect} from "react";

export const NotificationComponent = ({onClose}) => {

    useEffect(() => {
        const id = setTimeout(() => {
            onClose();
        }, 1500);
        return () => clearTimeout(id);
    }, [onClose])

    return (
        ReactDom.createPortal((<div className='notification_wrapper'>
            <div>You have just added a word!</div>
        </div>), document.getElementById('root'))

    )
}

NotificationComponent.propTypes = {
    onClose: PropTypes.func,
}

export const Notification = withPortal(NotificationComponent)