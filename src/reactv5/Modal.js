import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); //we use useRef HOOK to address same modal and destory exactly that modal to avoid memory leak

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current); //runs this function only hwne modal is closed
  }, []); //run once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
