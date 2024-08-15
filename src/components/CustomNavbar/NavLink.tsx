import { Nav } from "react-bootstrap";
import { Link, To } from "react-router-dom";

interface INavLink {
    handleMenuClose: () => void,
    active: boolean,
    text: string,
    path: To,
}
const NavLink = ({ 
    handleMenuClose,
    active,
    text, 
    path,
}: INavLink) => {
    return (
        <Nav.Link
            onClick={handleMenuClose}
            active={active}
            to={path} 
            as={Link}
        >
            {text}
        </Nav.Link>
    );
}

export default NavLink;