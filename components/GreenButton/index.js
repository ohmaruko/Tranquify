import styles from "./GreenButton.module.css";

export default function GreenButton({text}) {
    return (
        <div>
            <button className={styles.button}>{text}</button>
        </div>
    )
}