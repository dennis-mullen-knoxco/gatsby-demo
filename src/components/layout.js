import * as React from 'react';
import { Link } from 'gatsby';
import * as classes from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={classes.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={classes.navLinks}>
          <li className={classes.navLinkItem}>
            <Link to="/" className={classes.navLinkText}>
              Home
            </Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to="/about" className={classes.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={classes.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
