import '../../styles/Home/Welcome.scss';
import RSVP from '../RSVP/RSVP';
import EventDetails from './EventDetails';

const Welcome = () => {
    return (
        <>
            <div className='welcome-content'>
                <span>
                    <h5> We're Getting Married! </h5>
                    <h1> Sienna & Zach </h1>
                    <h5> 4.5.2025 </h5>
                </span>
            </div>

            <EventDetails />

            <br/>
            
            <RSVP />
        </>
    );
}

export default Welcome;