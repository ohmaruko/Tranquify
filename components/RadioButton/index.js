import React, { useState } from 'react';
import styles from './RadioButton.module.css';

const RadioButton = ({ tabIndex }) => { // Pass tabIndex as a prop
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsChecked(!isChecked); 
    }
  };

  return (
    <div className={styles.radioButton} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={tabIndex}>
      <div className={`${styles.circle} ${isChecked ? styles.checked : ''}`}></div>
    </div>
  );
};

export default RadioButton;


