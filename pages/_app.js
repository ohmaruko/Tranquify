import TopBar from "@/components/TopBar";
import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";
import {useRouter} from "next/router";
import { useEffect } from 'react';

const dm_sans = DM_Sans({ subsets: ["latin"]});

function getDirection(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {

  const {locale} = useRouter();

  useEffect(() => {
    // Clear local storage when the application starts or refreshes
    localStorage.clear();
}, []);

  return (
    <main className={`${dm_sans.className}, container`}>
      <TopBar />
      <Component {...pageProps} dir={getDirection(locale)} />
    </main>
  )
}