import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="/j">NEXT SUPER HERO!</a>
      </h1>
      <div>
        <Link href='/heroes'>See Hero list</Link>
      </div>
      <div>
        <Link href="/new-hero">Add a new Hero</Link>
      </div>
    </div>
  );
}
