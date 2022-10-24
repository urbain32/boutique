import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand fw-bold ' to='/'>Boutique</Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasDarkNavbar'
          aria-controls='offcanvasDarkNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='offcanvas offcanvas-end bg-dark'
          tabindex='-1'
          id='offcanvasDarkNavbar'
          aria-labelledby='offcanvasDarkNavbarLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasDarkNavbarLabel'>
              Dark offcanvas
            </h5>
            <button
              type='button'
              className='btn-close btn-close-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li className='nav-item'>
                <NavLink className='nav-link active' aria-current='page' end to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/order'>
                  Link
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <NavLink
                  className='nav-link dropdown-toggle'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </NavLink>
                <ul className='dropdown-menu dropdown-menu-dark'>
                  <li>
                    <NavLink className='dropdown-item' end to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className='dropdown-item' to='/order'>
                      order
                    </NavLink>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <NavLink className='dropdown-item' to='/cart'>
                      Cart
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className='d-flex mt-3' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
