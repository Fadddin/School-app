import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import GridContainer from '../components/GridContainer';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Message from '../components/Message/Message';
import AdmissionOpen from '../components/AdmissionOpen/AdmissionOpen';
import Footer from '../components/Footer/Footer';


const Home = () => {
    const images = [
        'https://placekitten.com/600/400',
        'https://placekitten.com/601/400',
        'https://placekitten.com/602/400',
        // Add more image URLs as needed
      ];
  return (
    <div>
        
        <ImageCarousel images={images} />
        <GridContainer/>
        <ImageGallery/>
        <Message/>
        <AdmissionOpen/>
        <Footer/>
    </div>
  )
}

export default Home