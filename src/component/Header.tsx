import styles from './Header.module.css'
import rocketLogo from './../assets/rocket.svg'

import '../global.css';

export function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logoRocket} src={rocketLogo} alt='Rocket logo'></img>
            <h1 className={styles.titulo}>todo</h1>
        </div>
    );
}