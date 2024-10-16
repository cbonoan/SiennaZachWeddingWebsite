import { Link } from 'react-router-dom';
import '../../styles/Footer/Footer.scss';

const Footer = () => {
    return (
        <>
            <div id='footer-links-container'>
                <Link to="/ceremony-reception">Ceremony & Reception</Link>
                <Link to="/travel-stay">Travel & Stay</Link>
                <Link to="/faqs">FAQ</Link>
            </div>
        </>
    );
}

export default Footer;