import React, { useState } from 'react';
import styles from './ToggleButton.module.css';

function ToggleButton({ tabIndex }) {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(prevChecked => !prevChecked);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleChange();
    }
  };

  // Generate a unique ID for the input element
  const uniqueId = `toggle-${Math.random()}`;

  return (
    <div className={styles.toggle} tabIndex={tabIndex} onClick={handleChange} onKeyDown={handleKeyDown}>
      <input
        type="checkbox"
        id={uniqueId}
        checked={checked}
        onChange={handleChange}
        className={styles.input}
      />
      <label htmlFor={uniqueId} className={styles.label}>
        {checked ? <span className={styles.textOn}>ON</span> : <span className={styles.textOff}>OFF</span>}
        <span className={styles.inner}></span>
      </label>
    </div>
  );
}

export default ToggleButton;

