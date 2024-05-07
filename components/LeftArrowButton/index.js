import styles from "./LeftArrowButton.module.css";
import Link from 'next/link';

export default function LeftArrowButton({onClick, displayStyle}) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onClick(); 
        }
    };

    return (
        <div onClick={onClick} style={displayStyle} tabIndex="0" onKeyDown={handleKeyDown}>
            <div className={styles.leftArrowButton}>
                <svg className={styles.leftArrow} xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
            </div>
        </div>
    )
}
