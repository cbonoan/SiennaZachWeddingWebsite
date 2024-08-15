import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import recommendations from '../../assets/recommendations';
import '../../styles/TravelStay/TravelStay.scss';
import Recommendation from './Recommendation';

const TravelStay = () => {
    const recommendations1 = [
        recommendations[0],
        recommendations[1],
        recommendations[2]
    ];

    const recommendations2 = [
        recommendations[3],
        recommendations[4],
    ];

    return (
        <>
            <div className="travel-stay-header">
                <span>
                    <h1>Travel & Stay</h1>
                </span>
            </div>

            <div className='hotel-recommendations'>
                <span><h1>Hotel Recommendations</h1></span>
                <Container>
                    <Row>
                        {recommendations1.map(recommendation => (
                            <Col key={recommendation.hotelName} sm={12} lg={4}>
                                <Recommendation 
                                    imgSrc={recommendation.imgSrc}
                                    hotelName={recommendation.hotelName}
                                    rating={recommendation.rating}
                                    reviews={recommendation.reviews}
                                    miles={recommendation.miles}
                                    link={recommendation.link}
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {recommendations2.map(recommendation => (
                            <Col key={recommendation.hotelName} sm={6}>
                                <Recommendation 
                                    imgSrc={recommendation.imgSrc}
                                    hotelName={recommendation.hotelName}
                                    rating={recommendation.rating}
                                    reviews={recommendation.reviews}
                                    miles={recommendation.miles}
                                    link={recommendation.link}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className='vacation-rentals'>
                <span><h1>Vacation Rentals</h1></span>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className='vacation-rental'>
                                <h2><a target='_blank' href='https://www.tropicalsunsetvilla.com'>Tropical Sunset Villa</a></h2>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='vacation-rental'>
                                <h2><a target='_blank' href='https://hawaiivacationcondos.outrigger.com/hawaii/maui/outrigger-honua-kai-resort-spa'>Aina Nalu</a></h2>
                                <span>Phone: (808) 661-4470</span>
                                <span>Reservations: (866) 994-1588</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className='vacation-rental'>
                                <h2><a target='_blank' href='https://makoaresorts.com/'>Villas by the Cove</a></h2>
                                <span>Phone: (808) 495-6826</span>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='vacation-rental'>
                                <h2><a target='_blank' href='https://makoaresorts.com/'>Wailea Inn</a></h2>
                                <span>Phone: (800) 405-0476</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TravelStay;