import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbarr(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   {/*</nav> <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color}`}>*/}

    <div className="container-fluid">
      <a className="navbar-brand" href="/"><h3>{props.title}</h3></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
         </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark mx-3" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} /*role="switch"*/ id="flexSwitchCheckDefault"/>
  <label className={`form-check-label" for="flexSwitchCheckDefault  `}>Change Mode</label>
</div>
       {/*  <div> Select Mode
         <button type="button" className="btn btn-success" onClick={props.green}>Green</button>
<button type="button" className="btn btn-danger" onClick={props.red}>Red</button>
<button type="button" className="btn btn-warning" onClick={props.yellow}>Yellow</button>
<button type="button" className="btn btn-info" onClick={props.blue}>blue</button>
         </div>*/}
         
      </div>
    </div>
  </nav>
  )
}

