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
    }, [])

    const eventHandler = (event) => {
        if (event.code === "Escape") {
            onCancel()
        } else if (event.code === "Enter") {
            onSubmit()
        }
    }

    return (
        <>
            <div className="modal" onClick={onCancel}> </div>
            <div className="modal_content">
                <span className="close" onClick={onCancel}>&times;</span>
                <h2>{title}</h2>
                {children}
                <div className="modal_control">
                    {/*<button onClick={onCancel}>Cancel</button>*/}
                    <button className='modal__btn' onClick={onSubmit}>Ok</button>
                </div>
            </div>
        </>
    )
}


// ModalComponent.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//     onCancel: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
// }

export const Modal = withPortal(ModalComponent);