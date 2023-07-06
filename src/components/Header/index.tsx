import { Line } from '../Line'
import styles from './styles.module.scss'

export function Header() {
  return (
    <>
      <Line/>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src='vercel.svg' alt='logo'/>
          <nav className={styles.navLinks}>
            <a>Home</a>
            <a>Sobre nós</a>
            <a>Áreas de atuação</a>
            <a>Blog</a>
            <a>Contato</a>
          </nav>
        </div>
      </header>
    </>
  )
}