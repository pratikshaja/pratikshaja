import { Button } from 'react-bootstrap';
import styles from './nav.module.css'; 
import '../App.css';
import navlogo from '../assets/images/nav-logo.png'


export default function Navbar(){
    return(
        <>

<nav className={styles.navbar}>
        <div>
        <img src={navlogo} className="logo"></img>

        </div>
        <div >
          <ul className={styles.menulist}>
            <li>Menu</li>
            <li>Location </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <Button variant="danger">Login</Button>      
        </nav>
        </>
    )
}