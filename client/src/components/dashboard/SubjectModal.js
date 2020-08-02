import React from 'react';
import { connect, useDispatch } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.report.isSubjectModalOpen,
    }
}

const SubjectModal = ({ isModalOpen }) => {
    const dispatch = useDispatch()
    return (
        <Modal
            open={isModalOpen}
            onClose={() => dispatch(toggleSubjectModal(false))}
        >

        </Modal >
    );
}

export default SubjectModal;