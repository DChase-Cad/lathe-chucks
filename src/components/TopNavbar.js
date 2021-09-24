import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const TopNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    //nav toggle
    const toggle = () => setIsOpen(!isOpen);

    //toggle function for drop down nav
    function toggleLink() {
        if (isOpen === true) {
            toggle();
        }
    };

    return (

            <Navbar className="w-100" light expand='md' sticky='top'>
                <NavbarBrand className="p-2" href="/home"><img src="assets/img/logo.png" alt="Logo" height="50" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className='w-100 mx-auto' isOpen={isOpen} navbar>
                    <Nav className="w-100 d-flex justify-content-end" navbar>
                        <NavItem onClick={toggleLink} className="nav-item ml-4 active drop mx-5 "><Link to='/' className="nav-link"><i className="d-none d-md-inline fa fa-home fa-lg"></i> Home</Link></NavItem>
                        <NavItem onClick={toggleLink} className="nav-item ml-4 drop mx-5 "><Link to='/aboutus' className="nav-link" ><i className="d-none d-md-inline fa fa-info fa-lg"></i> About</Link></NavItem>
                        <NavItem onClick={toggleLink} className="nav-item ml-4 drop mx-5"><Link className="nav-link" to="mailto:"><i className="d-none d-md-inline fa fa-address-card fa-lg"> </i> Contact</Link></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

    );
}

export default TopNavbar;