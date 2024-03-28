import React, { useState } from "react";
import styles from "./SettingPopup.module.css";

const SettingPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.popupWrapper}>
          <div className={styles.backdrop}></div>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              X
            </button>
            <svg className={styles.rectangleSvg} fill="none" viewBox="0 0 322 672" xmlns="http://www.w3.org/2000/svg">
              <rect height="672" width="322" fill="white" rx="30"/>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingPopup;
