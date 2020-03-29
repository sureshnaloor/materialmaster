import React from 'react';

import { Link } from 'react-router-dom';

export default function Mainnav() {
  return (
    <div>
      <nav className='mainnav'>
        <ul className='mainnav-menu'>
          <li className='mainnav-link'>
            <Link to='/'>
              <i className='fa fa-home' aria-hidden='true'></i> Home
            </Link>
          </li>
          <li className='mainnav-link'>
            <Link to='/show-matgroups'>
              <i className='far fa-images'></i>Show matgroups
            </Link>
          </li>
          <li className='mainnav-link'>
            <Link to='/show-vendors'>
              <i className='fas fa-store-alt'></i> Vendor List
            </Link>
          </li>
          <li className='mainnav-link'>
            <Link to='/search-vendor'>
              <i className='fas fa-search'></i>Search vendor and get details
            </Link>
          </li>
          <li className='mainnav-link'>
            <Link to='/wbswise-inv'>
              <i className='fas fa-street-view'></i> Project inv value
            </Link>
          </li>
          <li className='mainnav-link'>
            <Link to='/saleswise-inv'>
              <i className='fas fa-street-view'></i> Sales order inv value
            </Link>
          </li>
          <li className='mainnav-link'>
            <Link to='/matsearch'>
              <i className='fas fa-search'></i> Search material and get details
            </Link>
          </li>

          <li className='mainnav-link'>
            <Link to='/sign-in'>
              <i className='fas fa-sign-in-alt'></i> Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
