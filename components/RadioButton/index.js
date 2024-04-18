// import React from 'react';
// import styles from './RadioButton.module.css'

// const RadioButton = ({ options = [], selectedOption, onChange }) => {
//   return (
//     <div>
//       {options.map((option) => (
//         <label key={option.value}>
//           <input
//             type="radio"
//             value={option.value}
//             checked={selectedOption === option.value}
//             onChange={onChange}
//           />
//           {option.label}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default RadioButton;



// import React from 'react';
// import styles from './RadioButton.module.css';

// const RadioButton = ({ selectedOption, onChange }) => {
//   return (
//     <div className={styles.radioButton} onClick={onChange}>
//       <div className={styles.circle}>
//         {selectedOption ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
//           </svg>
//         ) : (
//           <div className={styles.emptyCircle}></div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RadioButton;

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



