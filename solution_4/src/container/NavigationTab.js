import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <>
      <br />
      <nav role='navigation' className='nav-justified px-5  shadow-sm nav'>
        <Nav tabs>
          <NavItem>
            <NavLink to='/home' className='nav-link text-info'>
              <h5>Home</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/login' className='nav-link text-info'>
              <h5>Login</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about' className='nav-link text-info'>
              <h5>About</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/blog' className='nav-link text-info'>
              <h5>Blog</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/contact' className='nav-link text-info'>
              <h5>Contact</h5>
            </NavLink>
          </NavItem>
        </Nav>
      </nav>
    </>
  )
}
export default Navigation
