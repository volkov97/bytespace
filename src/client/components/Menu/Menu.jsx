import React from 'react';

import './Menu.scss';

export default class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="Menu">
                <div className="Menu__content">
                    <div className="menu">
                        <div className="menu__title menu__title--before">
                            bytespace
                        </div>
                        <div className="menu__nav">
                            <div className="menu__item">
                                <a href="#about" className="menu__item-link">
                                    О нас
                                </a>
                            </div>
                            <div className="menu__item">
                                <a href="#exhibits" className="menu__item-link">
                                    Экспонаты
                                </a>
                            </div>
                            <div className="menu__item">
                                <a href="#brands" className="menu__item-link">
                                    Компании
                                </a>
                            </div>
                            <div className="menu__item">
                                <a href="#reviews" className="menu__item-link">
                                    Отзывы
                                </a>
                            </div>
                            <div className="menu__item">
                                <a href="#events" className="menu__item-link">
                                    События
                                </a>
                            </div>
                            <div className="menu__item">
                                <a href="#contacts" className="menu__item-link">
                                    Контакты
                                </a>
                            </div>
                        </div>
                        <div className="menu__title menu__title--after">
                            bytespace
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}