import styles from "./InputField.module.css";

export default function InputField({placeholder, inputType, value, onChange, invalid}) {

    return (
        <div className={styles.inputContainer}>
                <input 
                    inputType={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${styles.input} ${invalid ? styles.invalid : styles.input}`}
                />
        </div>
    )
}