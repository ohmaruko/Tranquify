import styles from "./BeigeButton.module.css";

export default function BeigeButton({text}) {
    return (
        <div>
            <button className={styles.button}>{text}</button>
        </div>
    )
}