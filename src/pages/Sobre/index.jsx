import styles from "./Sobre.module.css";
import avatar from "./Images/Avatar.png";
import html from "./Images/icon-html.svg";
import css from "./Images/icon-css.svg";
import js from "./Images/icon-js.svg";
import react from "./Images/icon-react.svg";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" />
        <div className={styles.textos}>
          <h2>Sobre</h2>
          <p>
            Me chamo <span>Junior Giroux</span> <br />
            <strong>Dev Junior</strong>
          </p>
          <p>Trabalho com desenvolvimento Web desde 2000.</p>
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas,{" "}
            <br /> com foco na experiência do usuário.
          </p>
        </div>
      </div>
      <div className={styles.hardskills}>
        <h3>Hardskills</h3>
        <div className={styles.icones}>
          <img src={html} alt="Icone do html" />
          <img src={css} alt="Icone do css" />
          <img src={js} alt="Icone do js" />
          <img src={react} alt="Icone do react" />
        </div>
      </div>
    </section>
  );
}
