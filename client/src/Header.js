import React from 'react'
import logo from './images/JALLogo.png'
export default function Header() {
    return ( 
    <div>
        <header className = "App-header">
        <img src = { logo }/>  <h4> JAL SAP Database portal < /h4> 
        <p> <span> Internal SAP Portal </span>developed for estimation and project teams for select MM reports and transactions</p >
        </header> 
    </div>
    )
}