import styles from './Page404.module.css'


export default function index() {
  return (
    <>
      <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
      <div className={styles.textos}>
        <span className={styles.texto_grande}>404</span>
        <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
      </div>
    </>
  )
}