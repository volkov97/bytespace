import React from 'react';
import Scroll from 'react-scroll';

import './Menu.scss';

import config from './Menu.config';

let scroller = Scroll.scroller;
let logo = require('../../../../static/images/elements/logo.jpg');

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: config.menuItems,
            scrollOptions: config.scrollOptions
        }
    }

    scrollTo = (e, elementId) => {
        scroller.scrollTo(elementId, this.state.scrollOptions);
        e.preventDefault();
    };

    render() {
        return (
            <div className="Menu">
                <div className="Menu__content">
                    <div className="menu">
                        <div className="menu__logo">
                            <img src={logo} alt="Logo" className="menu__logo-image"/>
                        </div>
                        <div className="menu__nav">
                            {this.state.menuItems.map((item, index) =>
                                <div className="menu__item" key={index}>
                                    <a href="#" onClick={_ => this.scrollTo(_, item.id)}
                                       className="menu__item-link">{item.text}</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}