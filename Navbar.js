import React from 'react'
import "./Navbar.css"
export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
    <a className="navbar-brand" href="#">STRATCOM UG</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-success" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="./">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="./Signup">Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="./Login">Login</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default Navbar;