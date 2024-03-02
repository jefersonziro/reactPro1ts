import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/jefersonziro.png" />
                <strong>Jeferson Z1r0</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>

        </aside>
        
        
        
    );
}