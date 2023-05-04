import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ReactIcon from './ReactIcon'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Navbar dark expand="md" container="fluid" color="dark">
        
        <NavbarBrand href="/home"><ReactIcon/> &nbsp; <b> Sistemas Orientados a Servicios</b></NavbarBrand>

        <Nav navbar>
          <NavItem>
            <NavLink href="/home" className="text-white">Inicio</NavLink>
          </NavItem>
          <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle nav caret className="text-white">Interfaces</DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <NavLink href="/association-stats" className="text-black">
                  Asociaciones
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink href="/phone-line-stats" className="text-black">
                  Líneas de teléfono
                </NavLink>
              </DropdownItem>

              <DropdownItem>
                <NavLink href="/projection-homes-stats" className="text-black">
                  Proyección de hogares
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
