import React from 'react';
import Slider from 'react-slick';

import './CompaniesGallery.scss';

import config from './CompaniesGallery.config';

const gallery = [
    require('../../../../static/images/companies-gallery/amiga.png'),
    require('../../../../static/images/companies-gallery/apple.png'),
    require('../../../../static/images/companies-gallery/atari.png'),
    require('../../../../static/images/companies-gallery/bayt.png'),
    require('../../../../static/images/companies-gallery/commodore.png'),
    require('../../../../static/images/companies-gallery/digital.png'),
    require('../../../../static/images/companies-gallery/ibm.png'),
    require('../../../../static/images/companies-gallery/msx.png'),
    require('../../../../static/images/companies-gallery/nintendo.png'),
    require('../../../../static/images/companies-gallery/sega.png'),
    require('../../../../static/images/companies-gallery/shneider.png'),
    require('../../../../static/images/companies-gallery/sinclair.png')
]

export default class CompaniesGallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            settings: config.settings
        };
    }

    render() {
        return (
            <div className="CompaniesGallery" id="brands">
                <div className="CompaniesGallery__header">
                    В главных ролях
                </div>
                <div className="CompaniesGallery__main">
                    <div className="gallery">
                        <Slider {...this.state.settings}>
                            {gallery.map((image, index) =>
                                <div className="gallery__item gradient" key={index}>
                                    <img src={image} alt="Company Gallery Item" className="gallery__img"/>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}
