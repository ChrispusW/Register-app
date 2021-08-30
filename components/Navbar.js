import React from 'react'
import "./Navbar.css"
export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <a className="navbar-brand" href="./"> <i className="fab fa-speakap"></i>STRATCOM UG</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-primary" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="./">Home<i className="fas fa-home"></i> <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./About">About<i className="far fa-eject"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Contact">Contact<i className="far fa-id-badge"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="./Signup">Signup<i className="fas fa-user-plus"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="./Login">Login<i className="fas fa-sign-in-alt"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="./Admin">Admin <i className="fas fa-users-crown"></i></a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default Navbar;