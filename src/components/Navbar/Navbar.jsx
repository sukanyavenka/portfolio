import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

 export const Navbar = () => {
    const[menuOpen ,setMenuOpen] =useState(false);
    return(
    <nav className={styles.navbar}>
        <a className ={styles.title}href="/">Porofolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeicon.png") : getImageUrl("nav/menuicon.png")} alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li> <a href="#about">About</a></li>
                <li> <a href="#experience">Experience</a></li>
                 <li> <a href="#project">Project</a></li>
                 <li> <a href="#contact">Contact</a></li>
                
            </ul>
        </div>
    </nav>
    
    );
 }