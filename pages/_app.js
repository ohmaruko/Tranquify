import "@/styles/globals.css";
import { DM_Sans, Quicksand } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${dm_sans.className} ${quicksand.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
