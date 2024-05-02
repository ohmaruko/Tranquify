import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import TopBar from "@/components/TopBar";
import GreenButton from "@/components/GreenButton";
import BeigeButton from "@/components/BeigeButton";
import LinkButton from "@/components/LinkButton";
import {useRouter} from "next/router";
import {FormattedMessage} from "react-intl";
import Link from "next/link";
import { useIntl } from 'react-intl';

export default function Home({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({id: "page.index.head.title"})
  const description = intl.formatMessage({id: "page.index.meta.description"})

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
      </Head>
      <header>
        <div>
          {[...locales].sort().map((locale) => {
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          })}
        </div>
      </header>
      <TopBar backButton={false} link='#'/>
      <main dir={dir} className={`${styles.main}`}>
          <Image 
            src="/images/logo-colour.svg"
            alt="logo"
            width={268} height={268} 
            className={styles.logo}
          />
        <div className={styles.buttonContainer}>
          <GreenButton id="page.index.log.in.button" greenButtonText="Log in" greenButtonLink="/logIn" />
          <BeigeButton beigeButtonText="Sign up" beigeButtonLink="signUp" /> 
        </div>
        <div className={styles.linkContainer}>
          <LinkButton link="/onboarding" linkText="Continue as guest" />
        </div>
        
      </main>
    </>
  );
}
