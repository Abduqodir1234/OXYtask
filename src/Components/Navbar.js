import React, { useState } from 'react';
import {useSelector} from "react-redux"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let token = useSelector(state=>state.main.token)
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md" className="px-4">
        <NavbarBrand href="/">OXY TASK</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-muted" to="/search">Search</NavLink>
            </NavItem>
            {typeof token === "undefined" ? "" :
            <NavItem>
              <NavLink className="px-4 text-muted" to="/products">Products</NavLink>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;