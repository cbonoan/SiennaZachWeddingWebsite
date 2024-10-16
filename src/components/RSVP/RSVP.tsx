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
                <span>Deadline for RSVP has passed!</span>
                <span>
                    See you there!
                </span>
                <div>
                    <Button disabled variant='light'>
                        RSVP
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RSVP;