import React, { useState, useEffect } from 'react'

import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';

import 'react-simple-hook-modal/dist/styles.css';


const MyModal = (props) => {

    const [info, setInfo] = useState(props.data)

    const { isModalOpen, openModal, closeModal } = useModal();
    
    useEffect(() => {
        if (info === "connect"){
        }
        openModal()
    }, [props.luncher]);


    return (
        <>
            <Modal isOpen={ isModalOpen } transition={ ModalTransition.BOTTOM_UP } >
                <button onClick={ closeModal }>close</button>
            </Modal>
        </>
    )
}

export default MyModal
