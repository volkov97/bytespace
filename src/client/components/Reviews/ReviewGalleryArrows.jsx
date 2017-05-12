import React from 'react';

export function ReviewGalleryNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='slick-arrow slick-next review-gallery__arr review-gallery__arr_next' onClick={onClick}>
        Next
    </div>
  );
}

export function ReviewGalleryPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='slick-arrow slick-next review-gallery__arr review-gallery__arr_prev' onClick={onClick}>
        Prev
    </div>
  );
}