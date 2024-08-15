import { Button, Image } from 'react-bootstrap';
import '../../styles/RSVP/RSVP.scss';

import RegistryImage from '../../assets/registry-img.jpg';

const RSVP = () => {
    return (
        <div id='registry-container'>
            <Image 
                id='registry-img'
                src={RegistryImage}
            />
            <div id='registry-content'>
                <span>Join us!</span>
                <span>
                    We hope you can make it!
                </span>
                <a 
                    target='_blank'
                    href='https://docs.google.com/forms/d/e/1FAIpQLSceuvVFn167ckaL-9dErpJtZriP1qIRk8cTYWTTwnkqsJ3jmg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link'
                >
                    <Button variant='light'>
                            RSVP
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default RSVP;