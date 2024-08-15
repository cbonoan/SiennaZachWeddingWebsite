import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import '../../styles/FAQ/FAQ.scss';

const FAQ = () => {
    return (
        <>
            <Container>
                <h1>FAQs</h1>
                
                <h5>What expenses should I consider prior to submitting a RSVP?</h5>
                <span>
                    Please consider the following expenses for a trip to Maui:
                    <ul>
                        <li>Plane Tickets</li>
                        <li>Hotel/Airbnb/Vacation Rental</li>
                        <li>Car Rentals</li>
                        <li>Parking</li>
                        <li>Food & Drinks</li>
                        <li>Activities (optional)</li>
                        <li>Souvenirs (optional)</li>
                    </ul>
                </span>

                <hr/>
                
                <h5>
                    If my child is invited, but is under the age of 10 years old,
                    where can they go during the ceremony?
                </h5>
                <span>
                    Children who are invited that are under the age of 10 years old, are not allowed into the
                    ceremony. An activities center will be available for the children to stay in, during the ceremony.
                    The activity center will be located in the Chapel. Adult supervision is required if your child is
                    taken to the activity center.
                    <br/>
                    <br/>
                    Unfortunately, we are unable to accommodate all children. Refer to your “save the date” to see if
                    your child is invited.
                </span>

                <hr/>

                <h5>
                    Can I bring a plus one or someone not listed on the “save the date”?
                </h5>
                <span>
                    Unfortunately, due to limitations, we are unable to accommodate a plus one to each of our
                    guests. To see if you are able to bring a plus one, refer to your “save the date”. Those listed under
                    “passengers invited” are the only individuals invited. If an individual listed is not able to attend,
                    <span>DO NOT</span> bring and/or RSVP for another individual to “fill in” their spot.
                </span>

                <hr/>

                <h5>
                    What should I wear?
                </h5>
                <span>
                    Tropical colors and Hawaiian attire are encouraged. For both men and women <span>DO NOT</span> wear
                    white suites/dresses or any color similar/near the color white (i.e., tan, cream, beige, champagne,
                    etc.). Stiletto heels are not recommended due to the area mainly consisting of grass. 
                    Guests are more than welcome to wear more formal attire for the ceremony and change into
                    casual-nice clothing for the reception.
                </span>

                <hr/>

                <h5>
                    Do you have any hotel or vacation rental recommendations?
                </h5>
                <span>
                    Feel free to search for your own AirBNB, Hotel, Vacation rental. Check <a href='/travel-stay'>here</a> for
                    our recommendations!
                </span>
            </Container>
            <Outlet/>
        </>
    )
}

export default FAQ;