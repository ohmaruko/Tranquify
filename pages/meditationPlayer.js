import Head from "next/head";
import styles from "@/styles/MeditationPlayer.module.css";
import TopBar from "@/components/TopBar";
import GreenButton from "@/components/GreenButton";
import { useRouter } from "next/router";
import { meditationData } from "@/data/meditation";

export default function MeditationPlayer() {
    const router = useRouter();
    const meditationContentId = Number(router.query.media);
    const data = meditationData.meditations[meditationContentId];

    return (
        <>
            <Head>
                <title>Tranquify App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopBar backButton={false} link='#'/>
            <main className={`${styles.main}`}>
                <div className={styles.content}>
                    <div className={styles.meditation}>
                        {/* <iframe width="319" height="217" src={data.source}
                            frameborder="0" border="0" cellspacing="0">
                        </iframe>    */}
                        <div>
                            <div>
                                <h2 className={styles.title}>{data.title}</h2>
                                <p>{data.duration}min</p>
                            </div>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className={styles.button} onClick={() => router.back()}>
                        <GreenButton greenButtonText="Finish Meditation" greenButtonLink="#" />
                    </div>
                </div>
            </main>
        </>
    );
}
