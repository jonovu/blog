import React from "react"
import { Link } from "gatsby"
import styles from './404.module.css';

export default () => (
    <div>
        <h1 className={styles.header}>404 Page not found.</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <p className={styles.errorMessage}>
            The page you were looking for does not exist.
        </p>
    </div>
)