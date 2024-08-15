import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import CeremonyImage from '../../assets/ceremony-details-img.jpg';
import ReceptionImage from '../../assets/reception-details-img.jpg';
import '../../styles/Home/EventDetails.scss';

const EventDetails = () => {
    return (
        <>
            <div id="event-details">
                <div id="ceremony-details">
                    <div>
                        <h1>Ceremony</h1>
                        <Image src={CeremonyImage}/>
                    </div>

                    <div className='details'>
                        <h1>Ceremony</h1>
                        <hr />
                        <h2>2:45 PM</h2>
                        <h4>Maui Pineapple Chapel</h4>
                        <h4>6012 Lower Honoapiilani Rd</h4>
                        <h4>Lahaina, HI</h4>
                    </div>
                </div>

                <div id="reception-details">
                    <div>
                        <h1>Reception</h1>
                        <Image src={ReceptionImage}/>
                    </div>

                    <div className='details'>
                        <h1>Reception</h1>
                        <hr />
                        <h2>5:00 PM</h2>
                        <h4>Location TBA</h4>
                        <h4>Lahaina, HI</h4>
                    </div>
                </div>

                <div id='see-how-it-started'>
                    <hr/>
                    <div id='see-how-it-started-btn'>
                        <h2>See how it all started</h2>
                        <Link to='/our-story'>
                            <Button variant='dark'>Our Story</Button>
                        </Link>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    );
    
}

export default EventDetails;