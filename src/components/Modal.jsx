import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">{props.modalPara}</p>
                <div className="modal__buttons">
                    <button onClick={() => props.setToggleModal(true)} className="btn btn__cancel">Cancel</button>
                    <button onClick={() => console.log('Confirm')} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}
