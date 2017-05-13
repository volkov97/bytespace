import React from 'react';

import './About.scss';

const decorations = {
    diskette: require('../../../../static/images/elements/diskette-2.png'),
    cassette: require('../../../../static/images/elements/cassette-2.png')
};

export default class About extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="About">
                <div className="About__header">
                    О музее
                </div>
                <div className="About__content">
                    <div className="about-us">
                        <p className="about-us__p">
                            С того момента мы работали над воплощением своей мечты: созданием настоящего музея ретро-компьютеров!
                        </p>
                        <img src={decorations.diskette} className="about-us__img about-us__img_left" alt="Дискета"/>
                        <p className="about-us__p">
                            Совсем скоро любой желающий сможет прикоснуться к "живым" легендам: компьютерам, которые изменили мир. Развитие технологий невероятно стремительно: прошло всего несколько десятилетий, но эти компьютеры уже стали достоянием истории...
                        </p>
                        <p className="about-us__p">
                            История, которая оживёт в стенах нашего музея! Следите за новостями, и уже скоро вы станете первыми посетителями нашего музея!
                        </p>
                        <img src={decorations.cassette} className="about-us__img about-us__img_right" alt="Кассета"/>
                        <p className="about-us__p">
                            Друзья! В прошлом году мы провели крупнейшую и самую известную в Беларуси благотворительную выставку ретро-компьютеров, посвященную 50-летию МРТИ-БГУИР
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}