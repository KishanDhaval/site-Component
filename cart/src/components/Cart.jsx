import React from 'react';
import styles from './Cart.module.css';

const Navbar = () => {

    return (
       
            <div className={styles.card}>
                <div className={styles.img}></div>
                <div className={styles.description}>
                    <div className={styles.NamePrice}>
                        <h4>Name of product</h4>
                        price
                    </div>
                    <p>Description</p>
                </div>
            </div>
      
    );
};

export default Navbar;
