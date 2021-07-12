import React from 'react';
import {Modal} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const WorksModal = ({modalOpen, onCancel, modalTitle, modalSubTitle, modalImgSrc, modalContent}) => {
    return (
        <Modal visible={modalOpen} centered mask={false} footer={null} closable={false} destroyOnClose onCancel={() => {
            onCancel();
        }}>
            <img width="100%" src={modalImgSrc} className="modal-title-img"/>
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