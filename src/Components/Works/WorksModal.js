import React, {useEffect} from 'react';
import {Modal} from 'antd';
import {CloseOutlined, LeftOutlined, RightOutlined} from '@ant-design/icons';
import { useState } from 'react';

const WorksModal = ({modalOpen, onCancel, modalTitle, modalSubTitle, modalImgSrc, modalContent}) => {
    const [modalImgInd, setModalImgInd] = useState(0);
    
    useEffect(() => {
        if(modalOpen) {
            setModalImgInd(0);
        }
    },[modalOpen])

    return (
        <Modal visible={modalOpen} centered mask={false} footer={null} closable={false} destroyOnClose width="600px" onCancel={() => {
            onCancel();
        }}>
            <div className="modal-title-img-container">
                <img width="100%" height="auto" src={modalImgSrc[modalImgInd]} className="modal-title-img"/>
                {modalImgInd !== 0 && <LeftOutlined className="modal-title-icon left" onClick={() => {
                    setModalImgInd(modalImgInd - 1)
                }}/>}
                {modalImgInd !== modalImgSrc.length -1 && <RightOutlined className="modal-title-icon right" onClick={() => {
                    setModalImgInd(modalImgInd + 1)
                }}/>}
            </div>
            <div className="modal-body-container">
            <div className="modal-title-container">
                {modalTitle}
            </div>
            <div className="modal-subtitle-container">
                {modalSubTitle}
            </div>
            <hr/>
            <div className="modal-content-container">
                {modalContent}
            </div>
            <div className="close-icon-container">
                <CloseOutlined className="close-icon" onClick={() => {
                    onCancel();
                }}/>
            </div>
            </div>
        </Modal>
    )
}

export default WorksModal;