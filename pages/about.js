import Image from "next/image";
import styles from "@/styles/About.module.css";
import Chart from "@/components/Chart";
import TopBar from "@/components/TopBar";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.homeTitle}>About Us</h1>
          <div className={styles.mascotContainer}>
            <Image src='/images/great-mascot.svg' alt='great-mascot' width={50} height={50} />
            <Image src='/images/good-mascot.svg' alt='good-mascot' width={50} height={50} />
            <Image src='/images/ok-mascot.svg' alt='ok-mascot' width={50} height={50} />
            <Image src='/images/bad-mascot.svg' alt='bad-mascot' width={50} height={50} />
            <Image src='/images/terrible-mascot.svg' alt='terrible-mascot' width={50} height={50} />
          </div>
          <div className={styles.appIntro}>
            <h2>Tranquify</h2>
            <p>
            We aim to promote mental well-being and provide practical tools for individuals to manage their emotional health effectively.<br></br>
              <br></br>
              As we witness a concerning rise in mood disorders across Canada, our mission is clear: to empower individuals to take charge of their emotional health through accessible and innovative tools. <br></br>
              <br></br>
            </p>
            <Chart />
            <p>
              Join us in this journey towards emotional resilience. Let's prioritize mental health together, one mindful moment at a time.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}