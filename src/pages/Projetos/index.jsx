import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";

export default function Projetos() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/juniorgirouxdev/repos?pages=1&per_page=100"
      );
      const data = await response.json();
      setRepositorios(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {repositorios.length > 0 ? (
        <section className={styles.lista}>
          {repositorios.map((repositorio) => (
            <Card
              key={repositorio.id}
              name={repositorio.name}
              description={repositorio.description}
              html_url={repositorio.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando Repositórios...</p>
      )}
    </section>
  );
}
