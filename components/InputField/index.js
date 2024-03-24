import styles from "./InputField.module.css";

export default function InputField({placeholder}) {

    return (
        <div className={styles.inputContainer}>
                <input 
                    type="email" 
                    id="email"
                    className={styles.input} 
                    placeholder={placeholder}
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                />
        </div>
    )
}