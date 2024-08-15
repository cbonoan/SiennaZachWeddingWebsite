import { Carousel, Image } from 'react-bootstrap';
import HowTheyMetQuote from '../../assets/HowTheyMetQuote';
import SiennaQuote from '../../assets/SiennaQuote';
import ZachQuote from '../../assets/ZachQuote';
import CarouselImage1 from '../../assets/carousel-img-1.jpg';
import CarouselImage2 from '../../assets/carousel-img-2.jpg';
import CarouselImage3 from '../../assets/carousel-img-3.jpg';
import CarouselImage4 from '../../assets/carousel-img-4.jpg';
import CarouselImage5 from '../../assets/carousel-img-5.jpg';
import OurStoryImage2 from '../../assets/our-story-img-2.jpg';
import OurStoryImage from '../../assets/our-story-img.jpg';
import '../../styles/OurStory/OurStory.scss';

const OurStory = () => {
    return (
        <div id="our-story">
            <h1>How It All Started</h1>

            <div id='our-story-img'>
                <Image src={OurStoryImage2} />
            </div>

            <blockquote id='sienna-quote' className='blockquote'>
                <p>"{SiennaQuote}"</p>
                <footer className='blockquote-footer'>Sienna</footer>
            </blockquote>

            <blockquote id='zach-quote' className='blockquote'>
                <p>"{ZachQuote}"</p>
                <footer className='blockquote-footer'>Zach</footer>
            </blockquote>

            <div id="our-story-intro">
                <Image src={OurStoryImage}/>

                <div id="our-story-details">
                    <hr/>
                    <p>
                        {HowTheyMetQuote}
                    </p>
                </div>
            </div>


            <div id='carousel-container' style={{backgroundColor: 'white'}}>
                <h1>And The Rest Is History</h1>
                {/* Add carousel */}
                <div id='carousel-div'>
                    <Carousel variant='dark' indicators={false} slide>
                        <Carousel.Item>
                            <Image src={CarouselImage1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={CarouselImage3}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={CarouselImage2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={CarouselImage4}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={CarouselImage5}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default OurStory;