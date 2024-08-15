import { Link } from 'react-router-dom';
import '../../styles/Footer/Footer.scss';

const Footer = () => {
    return (
        <>
            <div id='footer-links-container'>
                <Link to="/ceremony-reception">Ceremony & Reception</Link>
                <Link to="/travel-stay">Travel & Stay</Link>
                <Link to="/faqs">FAQ</Link>
                <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSceuvVFn167ckaL-9dErpJtZriP1qIRk8cTYWTTwnkqsJ3jmg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link">RSVP</Link>
            </div>
        </>
    );
}

export default Footer;