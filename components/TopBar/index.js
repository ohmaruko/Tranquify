import { useRouter } from 'next/router';
import styles from "./TopBar.module.css";
import SettingIcon from "@/components/SettingIcon";
import Image from "next/image";
import Link from "next/link";

export default function TopBar({
    backButton,
    link
}) {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className={styles.topBar}>
            <div>
                {/* Only renders the back button if backButton is true */}
                {backButton && (
                    <button tabIndex='1' onClick={handleBack} className={styles.backButton}>
                        <Image src='/images/back-button.svg' width={21} height={19} alt="Back"/>
                    </button>
                )}
            </div>
            <SettingIcon />
        </div>
    )
}
