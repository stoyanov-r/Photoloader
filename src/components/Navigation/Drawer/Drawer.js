import React from 'react';
import classes from './Drawer.module.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom';

export default class Drawer extends React.Component {

  listRender(links) {

    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const links = [
      {
        to: '/',
        exact: false,
        label: 'Photoloader'
      },
    ]

    this.props.isAuth
      ? links.push(
        {
          to: '/topics',
          exact: true,
          label: 'Topic List'
        },
        {
          to: '/logout',
          exact: false,
          label: 'Logout'
        },

      )
      : links.push(
        {
          to: '/auth',
          exact: false,
          label: 'Authentication'
        },
      )

    const cls = [
      classes.Drawer
    ]

    if (!this.props.isOpened) {
      cls.push(classes.close)
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.listRender(links)}
          </ul>
        </nav>
        {this.props.isOpened ? <Backdrop onClose={this.props.onClose} /> : null}
      </React.Fragment>
    )
  }
}