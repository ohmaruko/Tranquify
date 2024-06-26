import Navigation from '@/components/Navigation';
import Calendar from '@/components/Calendar';
import Image from 'next/image';
import styles from '@/styles/CalendarPage.module.css';

export default function renderCalendar() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.mascotContainer}>
          <Image src='/images/great-mascot.svg' alt='great-mascot' width={60} height={60} />
          <Image src='/images/good-mascot.svg' alt='good-mascot' width={60} height={60} />
          <Image src='/images/ok-mascot.svg' alt='ok-mascot' width={60} height={60} />
          <Image src='/images/bad-mascot.svg' alt='bad-mascot' width={60} height={60} />
          <Image src='/images/terrible-mascot.svg' alt='terrible-mascot' width={60} height={60} />
        </div>
        <div className={styles.calendarContainer}>
          <Calendar />
        </div>
        <Navigation />
      </div>
    </div>
  );
}

