import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton/Index";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";
import Image from 'next/image'
import avatarPic from '../../public/images/avatar.svg'

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Eae, bem-vindo</span>
          <h1>
            Noticias sobre o mundo do <span>React</span>
          </h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por {product.amount}/ mês</span>
          </p>

          <SubscribeButton />
        </section>

        <Image 
        src={avatarPic}
        alt="Mulher codando" 
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1J3VbjJdUrQxiIPe37EKqDFY");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
