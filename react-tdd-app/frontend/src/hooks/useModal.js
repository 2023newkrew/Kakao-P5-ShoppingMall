import React, { useCallback, useState } from "react";
import Modal from "@components/modal/Modal";

const useModal = ({ useBlur = true } = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    document.body.style.overflow = "hidden";
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    document.body.style.overflow = "auto";
    setIsOpen(() => false);
  }, []);

  return {
    Modal: isOpen ? ({ children }) => <Modal onClose={useBlur ? close : null}>{children}</Modal> : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
