import React, {} from 'react';

export const ModalPage = ({item, setModalVisible}) => {
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="modal-page">
            <div className="modal-body">
                <div className="modal-content">
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.gender}</div>
                        <div>{item.species}</div>
                        <div>{item.status}</div>
                        <div className="modal-image">
                            <img src={item.image} alt=""/>
                        </div>
                    </div>
                    <button onClick={closeModal} className="close-modal">X</button>
                </div>
            </div>
        </div>
    )
};