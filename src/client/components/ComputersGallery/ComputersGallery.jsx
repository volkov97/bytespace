import React from 'react';
import Slider from 'react-slick';

import './ComputersGallery.scss';

const gallery = [
    require('../../../../static/images/computers-gallery/comp1.png'),
    require('../../../../static/images/computers-gallery/comp2.png'),
    require('../../../../static/images/computers-gallery/comp3.png'),
    require('../../../../static/images/computers-gallery/comp4.png'),
    require('../../../../static/images/computers-gallery/comp5.png')
];

export default class ComputersGallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            settings: {
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 500,
                slidesToShow: 3,
                useCSS: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: { slidesToShow: 3 }
                    },
                    {
                        breakpoint: 900,
                        settings: { slidesToShow: 2 }
                    },
                    {
                        breakpoint: 620,
                        settings: { slidesToShow: 1 }
                    }
                ]
            }
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="ComputersGallery">
                <div className="ComputersGallery__header">
                    <div className="ComputersGallery__header-text">Галерея</div>
                </div>
                <div className="ComputersGallery__main">
                    <div className="gallery">
                        <Slider {...this.state.settings}>
                            {gallery.map((image, index) =>
                                <div className="gallery__item" key={index}>
                                    <img src={image} alt="Gallery Item 1" className="gallery__img" />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}