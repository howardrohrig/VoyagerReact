import React from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Header = (props) => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Voyager</NavbarBrand>
                <Button><i class="fa fa-lightbulb-o fa-2x p-0 my-auto ml-auto" aria-hidden="true" /></Button> 
                <NavbarToggler onClick={props.toggle} />
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>                      
                                <a class="nav-link active hover p-0 text-center" aria-current="page" href="/">
                                    <i className="fa fa-home fa-2x" aria-hidden="true" />
                                    <p className="m-0 p-0">Home</p>
                                </a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <a class="nav-link p-0 text-center" href="/">
                                    <i class="fa fa-pencil fa-2x" aria-hidden="true" />
                                    <p class="m-0 p-0">Blog</p>
                                </a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <a class="nav-link p-0 text-center" href="/">
                                    <i class="fa fa-camera-retro fa-2x" aria-hidden="true"></i>
                                    <p class="m-0 p-0">Photos</p>
                                </a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Button><i class="fa fa-lightbulb-o fa-2x p-0 my-auto ml-auto" aria-hidden="true" /></Button> 
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;