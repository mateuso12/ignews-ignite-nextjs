import { SignInButton } from "../SignInButton/Index";

import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink/Index";
import Image from 'next/image'
import Logo from '../../../public/images/logo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Início</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
