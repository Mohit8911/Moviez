import React from 'react';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid" >
    <a className="navbar-brand p-3 " href="d"style={{ color: 'white', fontSize:"30px"}}><b>MOVIEZ.COM</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{ color: 'white'}} aria-current="page" href="d">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ color: 'white'}} href="d">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" style={{ color: 'white'}} href="d">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;