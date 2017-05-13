import React from 'react';
import Slider from 'react-slick';

import './ComputersGallery.scss';

import config from './ComputersGallery.config';

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
            settings: config.settings
        };
    }

    render() { 
        return (
            <div className="ComputersGallery" id="exhibits">
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