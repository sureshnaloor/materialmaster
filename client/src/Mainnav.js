import React from 'react';
import './Mainnav.css';

import { NavLink } from 'react-router-dom';

export default function Mainnav(props) {
  return (
    <div>
      <nav className='mainnav'>
        <ul className='mainnav-menu'>
          <li className='mainnav-link'>
            <NavLink to='/' exact >
              <i className='fa fa-home' aria-hidden='true'></i> Home
            </NavLink>
          </li>
          <li className='mainnav-link'>
            <NavLink to='/show-matgroups' >
              <i className='far fa-images'></i>Show matgroups
            </NavLink>
          </li>
          <li className='mainnav-link'>
            <NavLink to='/show-vendors'>
              <i className='fas fa-store-alt'></i> Vendor List
            </NavLink>
          </li>
          <li className='mainnav-link'>
            <NavLink to='/search-vendor'>
              <i className='fas fa-search'></i>Search vendor and get details
            </NavLink>
          </li>
          <li className='mainnav-link'>
            <NavLink to='/wbswise-inv' >
              <i className='fas fa-street-view'></i> Project inv value
            </NavLink>
          </li>
          <li className='mainnav-link'>
            <NavLink to='/saleswise-inv' >
              <i className='fas fa-street-view'></i> Sales order inv value
            </NavLink>
          </li>
          <li className='mainnav-link'>
            <NavLink to='/matsearch' >
              <i className='fas fa-search'></i> Search material and get details
            </NavLink>
          </li>

          <li className='mainnav-link'>
            {!props.auth.isAuthenticated() ? (
              <i className='fas fa-sign-in-alt' onClick={props.auth.login}>
                Login
              </i>
            ) : (
              <i className='fas fa-sign-out-alt' onClick={props.auth.logout}>
                Logout
              </i>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
