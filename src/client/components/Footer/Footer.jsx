import React from 'react';

import './Footer.scss';

export default class Footer extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="Footer">
                <div className="Footer__content footer">
                    <div className="footer__title">
                        Будем рады видеть вас в нашем музее!
                    </div>
                    <div className="footer__link">
                        <a href="#">Следите за новостями</a>
                    </div>
                    <div className="footer__logo">Bytespace</div>
                </div>
            </div>
        );
    }

}