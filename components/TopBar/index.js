import styles from "./TopBar.module.css";
import SettingIcon from "@/components/SettingIcon";

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <SettingIcon/>
        </div>
    )
}