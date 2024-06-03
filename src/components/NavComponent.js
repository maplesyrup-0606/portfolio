import NavItem from "./NavItem";

const NavComponent = () => {
    const sections = ['About Me', 'Projects', 'Contact'];
    return (
        <nav>
            <ul>
                {sections.map(section => (
                    <NavItem section={section} key={section} />
                ))}
            </ul>
        </nav>
    );
}

export default NavComponent;