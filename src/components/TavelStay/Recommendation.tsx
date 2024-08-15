import Card from "react-bootstrap/Card";
import '../../styles/TravelStay/Recommendation.scss';

interface IRecommendation {
    imgSrc: string,
    hotelName: string,
    rating: string,
    reviews: number,
    miles: string,
    link: string,
}

const Recommendation = ({
    imgSrc,
    hotelName,
    rating,
    reviews,
    miles,
    link
}: IRecommendation) => {
    return (
        <Card bg='dark' text='light'>
            <Card.Img src={imgSrc}/>
            <Card.Body>
                <Card.Title><a target="_blank" href={link}>{hotelName}</a></Card.Title>
                <Card.Subtitle className="mb-2">
                    &#9733;{rating} ({reviews.toLocaleString()} Reviews) 
                    <br/>
                    {miles} miles from Maui Pineapple Chapel
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default Recommendation;