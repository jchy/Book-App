import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height:"50vh",
    width:"40vw"
  },
};

const SuccessModal = ({ isBookCreated, setIsBookCreated }) => {
  function openModal() {
    setIsBookCreated(true);
  }

  function closeModal() {
    setIsBookCreated(false);
  }

  return (
    <div>
      <Modal
        isOpen={isBookCreated}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 style={{marginTop:"30%", textAlign:"center"}}>Your book is successfully created!</h2>
        <div style={{ textAlign: "center", marginTop:"20%" }}>
          <Link
            to="/"
            onClick={closeModal}
            style={{
              textAlign: "center",
              textDecoration: "none",
              background: "#282c34",
              padding: "12px 24px",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "16px",
            }}
          >
            Close
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default SuccessModal;
