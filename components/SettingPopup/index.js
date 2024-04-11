import React, { useState } from "react";
import styles from "./SettingPopup.module.css";
import SettingButton from "../SettingButton";
import Link from "next/link";

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M4.80695 4.13232L21.5345 21.9999" stroke="#9DB580" stroke-width="7" stroke-linecap="round" />
                                <path d="M21.55 4L3.99999 21.55" stroke="#9DB580" stroke-width="7" stroke-linecap="round" />
                            </svg>
                        </button>

                        <h1 className={styles.settings}>Settings</h1>

                        <div className={styles.buttonContainer}>

                            <SettingButton title="Account Settings">
                                
                                {/* children prop - displays dropdown content */}
                                <div className={styles.dropdownContent}>
                                    <p>Change Password</p>
                                    <p>Change Email</p>
                                    <p>Change Username</p>
                                </div>
                            </SettingButton>

                            <SettingButton title="Favourites">
                                <div className={styles.dropdownContent}>
                                    {/* Dropdown content */}
                                </div>
                            </SettingButton>

                            <SettingButton title="Language">
                                <div className={styles.dropdownContent}>
                                    <p>English</p>
                                    <p>French</p>
                                </div>
                            </SettingButton>

                            <SettingButton title="Font Size">
                                <div className={styles.dropdownContent}>
                                    <p>Regular</p>
                                    <p>Large</p>
                                    <p>Larger</p>

                                </div>
                            </SettingButton>

                            <SettingButton title="Sound">
                                <div className={styles.dropdownContent}>

                                </div>
                            </SettingButton>

                            <SettingButton title="Dark Mode">
                                <div className={styles.dropdownContent}>

                                </div>
                            </SettingButton>

                            <h5>Go to&nbsp;
                                <span><Link href="/setting" className={styles.moreSettings}>More Settings...</Link></span>
                            </h5>
                        </div>

                        
                    </div>
                </div>
            )}
        </>
    );
};

export default SettingPopup;
