import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">{props.modalPara}</p>
                <div className="modal__buttons">
                    <button className="btn btn__cancel">Cancel</button>
                    <button className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}
