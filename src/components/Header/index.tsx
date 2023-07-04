import styles from './styles.module.scss'

export function Header() {
  return (
    // <header className="h-20 bg-lime-900">
      <div>
        {/* <img/> */}
        <nav className={styles.navLinks}>
          <a>Home</a>
          <a>About</a>
          <a>Jobs</a>
        </nav>
      </div>
    // </header>
    // <h1>Header</h1>
  )
}