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
                        <a target='_blank' href='https://www.google.com/maps/dir/32.8794112,-117.2078592/6012+Lower+Honoapiilani+Rd,+Lahaina,+HI+96761/@19.4952463,177.2216204,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x7eaad5c831bfa07d:0xfa26927ff33c9d7c!2m2!1d-156.655886!2d21.0027864?entry=ttu'>
                            <h4>Maui Pineapple Chapel - Mau'u Terrace</h4>
                            <h4>6012 Lower Honoapiilani Rd</h4>
                            <h4>Lahaina, HI</h4>
                        </a>
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
                        <a target='_blank' href='https://www.google.com/maps/dir/32.8794112,-117.2078592/6012+Lower+Honoapiilani+Rd,+Lahaina,+HI+96761/@19.4952463,177.2216204,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x7eaad5c831bfa07d:0xfa26927ff33c9d7c!2m2!1d-156.655886!2d21.0027864?entry=ttu'>
                            <h4>Maui Pineapple Chapel - Makai Lawn</h4>
                            <h4>6012 Lower Honoapiilani Rd</h4>
                            <h4>Lahaina, HI</h4>
                        </a>
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