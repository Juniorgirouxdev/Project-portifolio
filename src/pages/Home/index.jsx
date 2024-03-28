import { Link } from "react-router-dom";
import styles from './Home.module.css'

export default function Home() {
  return (
      <section className={styles.home}>
        <div className={styles.aprensentacao}>
          <p>
            Olá, sou <br />
            <span>Junior Giroux</span>
            <br />
            Dev Junior.
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais
          </Link>
        </div>
        <figure>
          <img
            className="img-home"
            src="/developer-red.svg"
            alt="Imagem da home"
          />
        </figure>
      </section>
  );
}
