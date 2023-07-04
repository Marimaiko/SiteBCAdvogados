import styles from './styles.module.scss'

export function Header() {
  return (
    // <header className="h-20 bg-lime-900">
      <div>
        {/* <img/> */}
        <nav className={styles.navLinks}>
          <a>Home</a>
          <a>Sobre nós</a>
          <a>Áreas de atuação</a>
          <a>Blog</a>
          <a>Contato</a>
        </nav>
      </div>
    // </header>
    // <h1>Header</h1>
  )
}