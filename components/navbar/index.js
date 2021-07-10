import Link from 'next/link'

import styles from './Navbar.module.css'

export default function Navar (){
    return(
         <header className={styles.Navbar}>
            <nav className={styles.Navbar_nav}>
                <div>
                    <span className={styles.Navbar_text}>Revestimientos</span> <i className="fas fa-brush"></i>
                </div>
                <i className="fab fa-whatsapp contact"></i>
            </nav>
        </header>
    )
}