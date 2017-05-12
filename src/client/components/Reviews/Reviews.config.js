import React from 'react';
import {
    ReviewGalleryNextArrow,
    ReviewGalleryPrevArrow
} from './ReviewGalleryArrows';

module.exports = {
    settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        useCSS: true,
        nextArrow: <ReviewGalleryNextArrow />,
        prevArrow: <ReviewGalleryPrevArrow className='review-gallery__arr_prev'/>
    }
};
