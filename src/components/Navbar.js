import React from 'react';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './NavElements';



const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">REAL</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to="/contact" primary='true'>
                        Contact US
                    </Button>
                </NavBtn>
        </Nav>
    )
}

export default Navbar;

