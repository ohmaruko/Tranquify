import React, { useState } from 'react';
import styles from './SettingButton.module.css';

export default function SettingButton({ title, children }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.settingButton}>
            <button className={styles.button} onClick={toggleDropdown}>
                {title}
            </button>
            <div className={`${styles.dropdownContent} ${isDropdownOpen ? styles.active : ''}`}>
                {children}
            </div>
        </div>
    );
}




