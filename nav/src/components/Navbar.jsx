import React from 'react';
import styles from './Navbar.module.css';
import { GoSearch } from "react-icons/go";

const Navbar = () => {

    return (
        <nav className={styles.Nav}>
            <div className={styles.logo}>
                <a href="#">E-commerce</a>
            </div>
            <div className={styles.mobile_btn}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={styles.main_menu}>
                <ul className={styles.nav_part2}>
                    <div className={styles.searchBar}>
                        <input type="search" name="search" id="search" placeholder='Search...' />
                        <button><GoSearch /></button>
                    </div>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li className={styles.has_dropdown}>
                        <a href="#">Category <i className="fas fa-angle-down"></i></a>
                        <ul className={styles.sub_menu}>
                            <li><a href="#">All Category</a></li>
                            <li><a href="#">Option 2</a></li>
                            <li><a href="#">Option 3</a></li>
                        </ul>
                    </li>
                    <li className={styles.has_dropdown}>
                        <a href="#">User <i className="fas fa-angle-down"></i></a>
                        <ul className={styles.sub_menu}>
                            <li><a href="#">dashboard</a></li>
                            <li><a href="#">logout</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
