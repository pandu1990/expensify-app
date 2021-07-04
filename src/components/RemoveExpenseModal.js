import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = ({ showModal, closeModal, removeExpense }) => (
  <Modal ariaHideApp={false} isOpen={showModal} contentLabel="Remove Expense" onRequestClose={closeModal} closeTimeoutMS={200} className="modal">
    <h3 className="modal__title">Remove Expense</h3>
    <p className="modal__body">Are you sure you want to remove this expense?</p>
    <div className="modal__actions">
      <button
        className="button button--secondary button--modal"
        onClick={() => {
          removeExpense();
          closeModal();
        }}
      >
        Yes
      </button>
      <button className="button button--modal" onClick={closeModal}>
        No
      </button>
    </div>
  </Modal>
);

export default RemoveExpenseModal;
