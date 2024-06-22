import React from "react";
import styles from './Signup.module.css';

const Signup = () => {
    return (
        <>
            <div className={styles.form_container}>
                <div className={styles.form}>
                    <h1>Signup</h1>
                    <form>

                        <input
                            type="name"
                            onChange={() => { }}
                            required
                            id="name"
                            className={styles.input}
                            autoComplete="off"
                            placeholder="Name here.."
                        />
                        <input
                            type="email"
                            onChange={() => { }}
                            required
                            id="email"
                            className={styles.input}
                            autoComplete="off"
                            placeholder="email here.."

                        />
                        <input
                            type="password"
                            onChange={() => { }}
                            required
                            id="password"
                            autoComplete="off"
                            className={styles.input}
                            placeholder="password here.."
                        />
                        <div className={styles.double}>
                            <input
                                type="number"
                                onChange={() => { }}
                                required
                                id="phone"
                                autoComplete="off"
                                className={styles.input}
                                placeholder="Phone..."
                            />
                            <input
                                type="text"
                                onChange={() => { }}
                                required
                                id="address"
                                autoComplete="off"
                                className={styles.input}
                                placeholder="address here.."

                            />
                        </div>
                        <input
                            type="text"
                            onChange={() => { }}
                            required
                            id="sports"
                            autoComplete="off"
                            className={styles.input}
                            placeholder="What is you favourait sports?"
                        />


                        <button type="submit" className={styles.Btn}>Register</button>
                    </form>
                    <p>Already registered? <a href="#">Login</a></p>
                </div>
            </div>
        </>
    );
};

export default Signup;
