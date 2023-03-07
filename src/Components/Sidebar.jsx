
import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react';

import cover from '../assets/cover.png'
import user from '../assets/user.jpg'

export function Sidebar(props) {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src={cover} />

        <div className={styles.profile}>
            <img src={user} />
            <h2>{props.profile}</h2>
            <p>{props.prof}</p>
        </div>

        <footer>
            <hr></hr><br/>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}

