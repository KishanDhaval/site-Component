import React from 'react'
import styles from './Home.module.css'
import Cart from '../../../cart/src/components/Cart'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.home}>
                <div className={styles.left}>
                    <div className={styles.filter}>
                        <h2>Filter By Category</h2>
                        <div className={styles.input}>
                        <input type="checkbox" name="category" id="category" />
                        <label htmlFor="category">al category</label>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <h2>Filter By Price</h2>
                        <div className={styles.input}>
                            <input type="radio" name="filste" id="filste" />
                            <label htmlFor="filste">by price</label>
                        </div>
                    </div>
                    <button className={styles.filterReset}>reset filter</button>
                </div>
                <div className={styles.right}>
                    <Cart />
                </div>
            </div>
        </div >
    )
}

export default Home
