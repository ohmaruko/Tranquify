import styles from "./TopBar.module.css";
import SettingIcon from "@/components/SettingIcon";
import Image from "next/image";
import Link from "next/link";

export default function TopBar({
    backButton,
    link
}) {
    return (
        <div className={styles.topBar}>
            <div>
                <Link href={link} style={{display: backButton===true ? 'block':'none'}}>
                    <Image src='/images/back-button.svg' width={21} height={19}/>
                </Link>
            </div>
            <SettingIcon/>
        </div>
    )
}