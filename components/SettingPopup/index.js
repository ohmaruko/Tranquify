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
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80695 4.13232L21.5345 21.9999" stroke="#9DB580" stroke-width="7" stroke-linecap="round"/>
<path d="M21.55 4L3.99999 21.55" stroke="#9DB580" stroke-width="7" stroke-linecap="round"/>
                </svg>

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
