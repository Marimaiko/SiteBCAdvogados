import styles from './styles.module.scss'

export function Banner() {
  return (
    <div className={styles.home}>
      <div className={styles.infoBox}>
        <h1>Advocacia <br/>moderna e<br/>descomplicada</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore architecto exercitationem doloribus aut nisi fugiat?</p>
        <button>Saiba mais</button>
      </div>
    </div>
  )
}