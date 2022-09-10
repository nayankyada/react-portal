import React from "react";
import PortalReactDOM from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");

  const el = document.createElement("div");

  React.useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return PortalReactDOM.createPortal(children, el);
};

export default Modal;
