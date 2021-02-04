import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    //views
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    LOGO
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" >
                                Home
                            </Link>
                        </li>    
                        <li className="nav-item">
                            <Link to='/signup' className="nav-link" aria-current="page" href="#">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='signin' className="nav-link" >
                                   Signin
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                        />
                        <button className="btn btn-outline-success" 
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                </div>
            </div>
        </nav>
    );

    return(
        <header id='header'>
            { showNavigation() }
        </header>
    )
};

export default Header;