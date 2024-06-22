import React from "react";
import styles from './Signup.module.css';

const Login = () => {
    return (
        <>
            <div className={styles.form_container}>
                <div className={styles.form}>
                    <h1>Login</h1>
                    <form>
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


                        <button type="submit" className={styles.Btn}>Login</button>
                    </form>
                    forger password?
                    <p>Already registered? <a href="#">Login</a></p>
                </div>
            </div>
        </>
    );
};

export default Login;
