import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from "./Redes.module.css"

const Redes = () => {
  return (
    <div className={styles.redes}>
    <a href="https://github.com/luchoca">
    <FontAwesomeIcon icon={faGithub}/>
      
    </a>
    <a href="https://www.linkedin.com/in/luchocastrosaad/">
      <FontAwesomeIcon icon={faLinkedin} />
      
    </a>
  </div>
  );
};

export default Redes;
