import Head from "next/head";
import styles from "@/styles/OnBoarding.module.css";
import TopBar from "@/components/TopBar";
import LinkButton from "@/components/LinkButton";
import Onboarding from "@/components/Onboarding";


export default function Onboarding01() {
    return (
        <>
            <Head>
                <title>Tranquify App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.content}>
                    <Onboarding />
                </div>
            </main>
        </>
    );
}
