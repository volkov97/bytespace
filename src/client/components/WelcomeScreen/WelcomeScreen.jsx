import React from 'react';

import './WelcomeScreen.scss';

export default class WelcomeScreen extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="WelcomeScreen">
                <div className="WelcomeScreen__content">
                    <div className="cover">
                        <div className="cover__content">
                            <div className="cover__title">
                                <div className="cover__title-text">Bytespace</div>
                            </div>
                            <div className="cover__caption">Музей ретрокомпьютеров</div>

                            <div className="cover__enroll">
                                <button className="cover__enroll-btn">Записаться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}