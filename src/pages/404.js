import React from "react"
import { Link } from "gatsby"
import styles from './404.module.scss'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <div className={styles.content}>
            <h1 className={styles.header}>404 Page not found.</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            <p className={styles.errorMessage}>
                The page you were looking for does not exist.
            </p>
        </div>
    </Layout>
)