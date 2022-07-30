import Head from 'next/head'
import HeroText from '../components/HeroText'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing Next.JS with Context and Hooks</title>
        <link rel="icon" href="/setUser.ico" />
      </Head>

      <HeroText />
    </div>
)
}
