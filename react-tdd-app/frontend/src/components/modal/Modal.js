// TODO : reactDom의 크기 133.5k 생각보다 크다 로직 변경 요망
import ReactDOM from "react-dom";
import styled from "styled-components";

const Portal = ({ children }) => {
  const modalElement = document.getElementById("modal");
  return ReactDOM.createPortal(children, modalElement);
};

const Modal = ({ onClose, children }) => {
  return (
    <Portal>
      <ModalContainer onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>{children}</ModalWrapper>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;

const ModalContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 70%;

  min-width: 900px;

  border: 1px solid black;
  background-color: white;
`;
