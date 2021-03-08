import React, { useState, useEffect } from 'react'

import { Modal, useModal, ModalTransition } from 'react-simple-hook-modal';

import 'react-simple-hook-modal/dist/styles.css';

import Inscription from './Forms/Inscription'
import Login from './Forms/Login'
import NewResaturant from './Forms/AddRestaurant'


const MyModal = (props) => {

    const [info, setInfo] = useState(props.data)

    const { isModalOpen, openModal, closeModal } = useModal();

    
    useEffect(() => {
        openModal()
        setInfo(props.data)
    }, [props.luncher]);


    return (
        <>
            <Modal isOpen={ isModalOpen } transition={ ModalTransition.BOTTOM_UP } >
                <span className="close-modal" onClick={ closeModal }>X</span>
                <h3>{ info }</h3>
                { info === 'register' ?
                    <Inscription /> : ""
                }

                { info === 'login' ?
                    <Login /> : ""
                }

                { info === 'newResto' ?
                    <NewResaturant /> : ""
                }
            </Modal>
        </>
    )
}

export default MyModal
