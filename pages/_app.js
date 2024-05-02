import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";

import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

const dm_sans = DM_Sans({ subsets: ["latin"]});

const messages = {
  en, fr
}

function getDirection(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {

  const {locale} = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <main className={`${dm_sans.className}, container`}>
        <Component {...pageProps} dir={getDirection(locale)} />
      </main>
    </IntlProvider>
  )
}