import { SignInButton } from '../SignInButton/Index'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Início</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
