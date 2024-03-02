import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Header() {
    return (
        <header className={styles.header}>
            <img src="/src/assets/ignite-logo.svg" alt="logotipo do ignite" />
        </header>
    );
}