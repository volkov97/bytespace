import React from 'react';

import './Footer.scss';

export default class Footer extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="Footer">
                <div className="Footer__content footer">
                    <div className="footer-info">
                        <div className="footer-info__title">
                            Будем рады видеть вас в нашем музее!
                        </div>
                        <div className="footer-info__news-link">
                            <a href="#" className="footer-info__link" target="_blank">
                                Следите за новостями
                            </a>
                        </div>
                        <div className="footer-info__sign">
                            <div className="footer-info__sign-text">Bytespace</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}