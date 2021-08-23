import "./index.scss"
import {useEffect} from "react";
import {withPortal} from "../../../hocs/withPortal";
import PropTypes from "prop-types";

export const ModalComponent = ({onCancel, title, children, onSubmit}) => {
    useEffect(() => {
        window.addEventListener('keydown', eventHandler)
        return () => {
            window.removeEventListener('keydown', eventHandler)
        }
    })

    const eventHandler = (event) => {
        if (event.code === "Escape") {
            onCancel()
        }
    }

    return (
        <>
            <div className="modal" onClick={onCancel}> </div>
            <div className="modal__content">
                <span onClick={onCancel}>&times;</span>
                <h2>{title}</h2>
                {children}
                <div className="modal__control">
                    <button className='modal__control_btn' onClick={onSubmit}>Ok</button>
                </div>
            </div>
        </>
    )
}


ModalComponent.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export const Modal = withPortal(ModalComponent);