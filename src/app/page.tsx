// import Image from "next/image";
// import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      <Link href="/">Home</Link><br></br>
      <Link href="/contacts">Contacts</Link>

      <h1>Home</h1>

    </main>
  );
}
// <main className={styles.main}></main>