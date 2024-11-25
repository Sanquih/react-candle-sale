"use client";
import React from "react";
import ReactDOM from "react-dom";
import { CloseBtn } from "../CloseBtn";
import styles from "./Modal.module.css";

export type ModalProps = {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible, children }) => {
  return ReactDOM.createPortal(
    <div
      className={`${styles.modal} ${isVisible ? styles.on : ""} col w100 h100`}
    >
      <div className={`${styles.content_modal} col`}>
        <CloseBtn onClick={() => setIsVisible(false)} />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
