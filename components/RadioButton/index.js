import React, { useState } from 'react';
import styles from './RadioButton.module.css';

const RadioButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.radioButton} onClick={handleClick}>
      <div className={`${styles.circle} ${isChecked ? styles.checked : ''}`}></div>
    </div>
  );
};

export default RadioButton;



