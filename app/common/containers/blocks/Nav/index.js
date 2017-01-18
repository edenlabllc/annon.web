import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import NavItem from 'components/NavItem';
import Icon from 'components/Icon';

import styles from './styles.scss';


@withStyles(styles)
export default class Nav extends React.Component {
  render() {
    const { isOpen } = this.props;

    return (
      <nav className={classnames(styles.nav, isOpen && styles.open)}>
        <ul>
          <NavItem to="apis" activeClassName={styles.active}>
            <Link to="/apis">API’s</Link>
          </NavItem>
          <NavItem to="requests" activeClassName={styles.active}>
            <Link to="/requests">Requests</Link>
          </NavItem>
        </ul>
        <ul className={styles.down}>
          <li>
            <a href="http://docs.annon.apiary.io/">
              <Icon name="doc" />
              Documentation
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
