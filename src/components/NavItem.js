import { Link } from 'react-scroll';
import React from 'react';

const NavItem = ( {section} ) => {
    return (
        <li>
            <Link to={section.toLowerCase().replace(' ', '-')} smooth={true} duration={500}>
            {section}
            </Link>
        </li>
    );
};

export default NavItem;