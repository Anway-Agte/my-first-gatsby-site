import { Link } from 'gatsby';
import * as React from 'react' ; 
import * as classes from '../components/layout.module.css'

const Layout = (props) => {
    return(
        <main className={classes.container}>
            <title>SteveBlog - {props.title}</title>
            <nav>
                <ul className={classes.navLinks}>
                    <li className={classes.navLinkItem}><Link className={classes.navLinkText} to="/">Home</Link></li>
                    <li><Link className={classes.navLinkText} to="/about">About</Link></li>
                </ul>
            </nav>
            <h1 className={classes.heading}>{props.title}</h1>
            {props.children}
        </main>
    )
} 

export default Layout ;