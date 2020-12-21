import react from 'react';
import {Alert} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
      UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
import '../css/header.css';
import { NavLink } from "react-router-dom";
     
function Topheader(){
    return(
        <div className="topHeader-main">
            <div className="top_nav">
                <div className="my_name">
                    <span>Devi Prasad Sahoo</span>
                </div>
                <div className="my_contact">
                    <span>devi123.sahoo@gmail.com</span>
                </div>
            </div>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                {/* <div class="nav-header">
                    <div class="nav-title">
                        <NavLink exact to="/" className="myNameLink">Devi Sahoo</NavLink>
                    </div>
                </div> */}
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <NavLink exact activeClassName="active_menu" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active_menu" to="/portfolio">Portfolio</NavLink>
                    <NavLink exact activeClassName="active_menu" to="/skills">Skills</NavLink>
                    <NavLink exact activeClassName="active_menu" to ="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Topheader;