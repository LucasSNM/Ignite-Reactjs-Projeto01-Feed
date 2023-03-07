// import styles from './Header.css'
import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt={igniteLogo} />
            <strong>Ignite Feed</strong>
        </header>
    )
}