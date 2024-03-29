import Head from "next/head";
import styles from "@/styles/SignUp.module.css";
import TopBar from "@/components/TopBar";
import GreenButton from "@/components/GreenButton";
import LinkButton from "@/components/LinkButton";
import InputField from "@/components/InputField";


export default function SignUp() {
    return (
        <>
            <Head>
                <title>Tranquify App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopBar/>
            <main className={`${styles.main}`}>
                <div className={styles.content}>
                    <h1 className={styles.signUpText}>Create your Account</h1>
                    <form>
                        <InputField placeholder="Username"/>
                        <InputField placeholder="Email"/>
                        <InputField placeholder="Password"/>
                    </form>
                    <div className={styles.signUpButton}>
                        <GreenButton greenButtonText="Sign up" greenButtonLink="/onboarding01"/>
                    </div>
                    <p className={styles.haveAccount}>Already have an account?</p>
                    <LinkButton linkText="Log in" link="/logIn" />
                </div>
            </main>
        </>
    );
}
