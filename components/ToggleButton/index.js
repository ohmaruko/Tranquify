import React, { useState } from 'react';
import styles from './ToggleButton.module.css';

function ToggleButton() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={handleChange}
        className={styles.input}
      />
      <label htmlFor="toggle" className={styles.label}>
        {checked ? <span className={styles.textOn}>ON</span> : <span className={styles.textOff}>OFF</span>}
        <span className={styles.inner}></span>
      </label>
    </div>
  );
}

export default ToggleButton;


