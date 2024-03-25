import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import TopBar from "@/components/TopBar";
import GreenButton from "@/components/GreenButton";
import BeigeButton from "@/components/BeigeButton";
import LinkButton from "@/components/LinkButton";

export default function Home() {
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
        <span className={styles.logo}></span>
        <h1 className={styles.tranquify}>Tranquify</h1>
        <div className={styles.buttonContainer}>
          <GreenButton greenButtonText="Log in" greenButtonLink="/logIn" />
          <BeigeButton beigeButtonText="Sign up" beigeButtonLink="signUp" /> 
        </div>
        <div className={styles.linkContainer}>
          <LinkButton link="/logIn" linkText="Continue as guest" />
        </div>
        
      </main>
    </>
  );
}
