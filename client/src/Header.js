import React from 'react';
import logo from './images/JALLogo.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

export default function Header() {
  return (
    <div>
      <header className='App-header'>
        <div>
          <img className='logo' src={logo} />
          <h4> MM PORTAL - JAL International </h4>
        </div>
        <img src={img1} alt='pic1' />
        <img src={img3} alt='pic2' />
        <img src={img2} alt='pic3' />
        <div>
          <p>
            {' '}
            <span>Internal SAP Portal</span>
          </p>
          <h4>for estimation and project teams for Material data</h4>
          <h6> (Strictly for internal use only for authorised users)</h6>
        </div>
      </header>
    </div>
  );
}
