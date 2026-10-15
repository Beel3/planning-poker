import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/" className={styles.logo}>
      <h2 className={styles.title}>
        Планинг-покер
      </h2>
    </Link>
    <ul>
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/docs">Справка</Link></li>
      <li><a title="Исходный код на GitHub" href="https://github.com/ceuk/planning-poker/" target="_blank" rel="noreferrer">GitHub ↗</a></li>
    </ul>
  </nav>
)

export default Nav
