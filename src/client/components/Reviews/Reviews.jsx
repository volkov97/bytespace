import React from 'react';
import Slider from 'react-slick';

import './Reviews.scss';

import config from './Reviews.config';

const reviews = [
    {
        image: require('../../../../static/images/reviews-people/human1.jpg'),
        person: {
            name: 'Вадим',
            type: 'Посетитель'
        },
        text: 'Я очень долго откладывал поход, пока, наконец, не пришел. Большое удовольствие доставила экскурсия, проведённая лично моим другом, за что ему огромное спасибо. =) За то короткое время, которое я провел на выставке, я словно побывал в тех годах, когда калькуляторы весили больше, чем современные ноутбуки. Мне повезло увидеть кучу вещей, которые я не видел раньше. Да что там увидеть, подержать! Огромное спасибо владельцу коллекции и всем организаторам! Буду ждать выставку в следующем году и постараюсь быть первым посетителем.'
    },
    {
        image: require('../../../../static/images/reviews-people/human2.jpg'),
        person: {
            name: 'Дмитрий',
            type: 'Посетитель'
        },
        text: 'Где же еще можно посидеть за Macintosh Performa 475 и пострелять по тарелкам из пистолета, как когда-то в детстве? Очень интересно было ознакомиться с первыми моделями ноутбуков наяву и даже поработать за некоторыми из них. Впервые увидел портативные приставки (Nintendo, Game Boy) и великолепную INDY от SG (которую попытался взломать. :) Музыка на пластинках и хорошая акустика — класс, буквально наслаждение звуками. Спасибо ребятам, отличная атмосфера и уникальные экспонаты — незабываемо!'
    },
    {
        image: require('../../../../static/images/reviews-people/human3.jpg'),
        person: {
            name: 'Денис',
            type: 'Посетитель'
        },
        text: 'Когда Александр предложил мне поучаствовать в организации выставки, проводить экскурсии, я был крайне рад. Ведь когда-то я сам был простым посетителем его выставки (организованной на День программиста), а сейчас я мог стать её частью и также рассказывать об экспонатах, как рассказывали мне. Было приятно наблюдать за удивлением, радостью и интересом посетителей, повторными их посещениями уже с друзьями, ведь всё это означало, что выставка удалась.'
    }
]

export default class Reviews extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            settings: config.settings
        };
    }

    render() {
        return (
            <div className="Reviews">
                <div className="Reviews__header">
                    Отзывы
                </div>
                <div className="Reviews__content">
                    <div className="review-gallery">
                        <Slider {...this.state.settings}>
                            {reviews.map((review, index) =>
                                <div className="review-gallery__item review" key={index}>
                                    <div className="review__person clearfix">
                                        <div className="review__person-photo">
                                            <img src={review.image} alt="Gallery Item 1" className="review__person-image" />
                                        </div>
                                        <div className="review__person-name">
                                            {review.person.name}
                                        </div>
                                        <div className="review__person-type">
                                            {review.person.type}
                                        </div>
                                    </div>
                                    <div className="review__text">
                                        {review.text}
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}