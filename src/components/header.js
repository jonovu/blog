import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './header.module.scss'
//import { Static } from 'ink';

// HeaderLink Component
const HeaderLink = props => ( //This is a private component that cannot be used aanywhere outside the module because it lacks an 'export' keyword and instead uses a const variable.
    <Link className={styles.link} to={props.to}>{props.text}</Link>
)

// HomeButton component 
const HomeButton = props => (
    <Link to={props.to}>
        <div className={styles.button}>{props.text}</div>
    </Link>
)

// SocialButton component
const SocialButton = (props) => {

    let style = ''; //logic
    let url = '';

    if (props.site === 'twitter') { //if site="twitter" === twitter
        style = styles.buttonTwitter; //className={*styles.buttonTwitter*}
        url = "https://twitter.com/" + props.username; //href="https://twitter.com/*evangeloper*"
    }

    if (props.site === 'linkedin') {
        style = styles.buttonLinkedin;
        url = "https://www.linkedin.com/in/" + props.username;
    }

    if (props.site === 'github') {
        style = styles.buttonGithub;
        url = "https://www.github.com/" + props.username;
    }

    return ( //rendered jsx from the component
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={style}>{props.children}&nbsp;</div>
        </a>
    )
}

export default () => (

    <StaticQuery

        query = {graphql 
            `query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }`
        }
        render = { data => (
            
                <header className={styles.container}>

                    <div className={styles.row}>
                        <HomeButton to='/' text={data.site.siteMetadata.title} />
                        <SocialButton site="github" username="evangeloper" children=""></SocialButton>
                        <SocialButton site="linkedin" username="evangeloper" children=""></SocialButton>
                        <SocialButton site="twitter" username="evangeloper" children=""></SocialButton>
                    </div>
            
                    <div className={styles.row}>
                        <HeaderLink to='/' text='HOME' />
                        <HeaderLink to='/about' text='ABOUT' />
                    </div>
        
                </header>
            )
        }

    />
)
