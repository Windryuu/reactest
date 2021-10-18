import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

<img src="https://produits.bienmanger.com/36035-0w600h600_Pommes_Granny_Smith_France_Bio.jpg" width="80px" height="80px"/>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">

  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/galery">Galery</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </li>

  </ul>
  
</div>
</nav>
        </header>
        
    )
}

export default Header