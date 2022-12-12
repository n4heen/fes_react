import React, { useState } from 'react'
import './Modal.css'

export default function Modal(props) {

    const [toggleModal, setToggleModal] = useState(false)
    return (
        <>
            <div className="modal">
                <p className="modal__title">{props.modalPara}</p>
                <div className="modal__buttons">
                    <button onClick={props.cancel()}  className="btn btn__cancel">Cancel</button>
                    <button onClick={() => console.log('Confirm')} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}
