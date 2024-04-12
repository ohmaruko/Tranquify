import React, { useState } from "react";
import styles from "./SettingButton.module.css";

const SettingButton = ({ title, icon, chevron, children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.settingButton}>
            <button className={styles.button} onClick={toggleDropdown}>
                <div className={styles.buttonContent}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>

                    {/* Render the chevron component if provided */}
                    {chevron && (
                        <div className={styles.chevron}>
                            {isDropdownOpen ? (
                                // Render the open chevron
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.7981 1.12754C22.878 1.21357 22.9414 1.31576 22.9846 1.42827C23.0279 1.54078 23.0502 1.6614 23.0502 1.78321C23.0502 1.90503 23.0279 2.02564 22.9846 2.13815C22.9414 2.25066 22.878 2.35286 22.7981 2.43888L12.5009 13.5519C12.4212 13.6382 12.3265 13.7066 12.2223 13.7533C12.118 13.8 12.0063 13.824 11.8934 13.824C11.7805 13.824 11.6688 13.8 11.5645 13.7533C11.4603 13.7066 11.3656 13.6382 11.2859 13.5519L0.98875 2.43888C0.827621 2.26499 0.737102 2.02914 0.737102 1.78321C0.737102 1.53729 0.827621 1.30144 0.98875 1.12754C1.14988 0.953646 1.36841 0.855953 1.59628 0.855953C1.82415 0.855953 2.04268 0.953646 2.20381 1.12754L11.8934 11.5868L21.583 1.12754C21.6627 1.0413 21.7574 0.972873 21.8617 0.926186C21.9659 0.8795 22.0777 0.855469 22.1905 0.855469C22.3034 0.855469 22.4152 0.8795 22.5194 0.926186C22.6237 0.972873 22.7184 1.0413 22.7981 1.12754Z" fill="black" />
                                </svg>
                            ) : (
                                // Render the closed chevron
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.42085 2.77767C8.50503 2.69909 8.60504 2.63675 8.71514 2.59422C8.82524 2.55168 8.94327 2.52979 9.06247 2.52979C9.18167 2.52979 9.29971 2.55168 9.40981 2.59422C9.51991 2.63675 9.61991 2.69909 9.7041 2.77767L20.5791 12.9027C20.6635 12.981 20.7305 13.0742 20.7761 13.1767C20.8218 13.2792 20.8453 13.3891 20.8453 13.5C20.8453 13.611 20.8218 13.7209 20.7761 13.8234C20.7305 13.9259 20.6635 14.019 20.5791 14.0974L9.7041 24.2224C9.53393 24.3809 9.30313 24.4699 9.06247 24.4699C8.82182 24.4699 8.59102 24.3809 8.42085 24.2224C8.25068 24.064 8.15508 23.8491 8.15508 23.625C8.15508 23.401 8.25068 23.1861 8.42085 23.0277L18.656 13.5L8.42085 3.97242C8.33645 3.89404 8.26949 3.80093 8.2238 3.69843C8.17812 3.59592 8.1546 3.48603 8.1546 3.37504C8.1546 3.26406 8.17812 3.15417 8.2238 3.05166C8.26949 2.94915 8.33645 2.85605 8.42085 2.77767Z" fill="black" />
                                </svg>
                            )}
                        </div>
                    )}
                </div>
            </button>

            <div className={`${styles.dropdownContent} ${isDropdownOpen ? styles.active : ''}`}>
                {children}
            </div>

        </div>
    );
};

export default SettingButton;

