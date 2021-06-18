import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton/Index";

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Eae, bem-vindo</span>
          <h1>Noticias sobre o mundo do <span>React</span></h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por R$ 15,99 / mês</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Mulher codando"/>
      </main>
    </>
  );
}
