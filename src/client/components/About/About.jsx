import React from 'react';

import './About.scss';

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

                    <div className="About__description">
                        <span className="textLeft">Друзья! В прошлом году мы провели крупнейшую и самую известную в Беларуси благотворительную выставку ретро-компьютеров, посвященную 50-летию МРТИ-БГУИР</span>
                        <span className="textRight">С того момента мы работали над воплощением своей мечты: созданием настоящего музея ретро-компьютеров!</span>
                        <span className="textRight">Совсем скоро любой желающий сможет прикоснуться к "живым" легендам: компьютерам, которые изменили мир. Развитие технологий невероятно стремительно: прошло всего несколько десятилетий, но эти компьютеры уже стали достоянием истории...</span>
                        <span className="textLeft">История, которая оживёт в стенах нашего музея! Следите за новостями, и уже скоро вы станете первыми посетителями нашего музея!</span>
                    </div>
                </div>
            </div>
        );
    }

}