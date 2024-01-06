import styles from "../Menu/Menu.module.css";
import { Link } from "react-router-dom";
import Redes from "./Redes/Redes";

const Menu = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>LOGO</span>

      <nav className={styles.nav}>
        <Link to="../Inicio/Inicio.jsx">
          <span>I</span>nicio
        </Link>
        <Link to="../Proyectos/Proyectos.jsx">
          <span>P</span>royectos
        </Link>
        <Link to="../SobreMi/SobreMi.jsx">
          {" "}
          <span>S</span>obre Mi
        </Link>
      </nav>
      <nav className={styles.nav_mobile}></nav>
      <Redes />
    </header>
  );
};

export default Menu;
