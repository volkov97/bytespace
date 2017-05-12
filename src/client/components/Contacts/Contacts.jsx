import React from 'react';
import {Map, Marker, MarkerLayout} from 'yandex-map-react';

import './Contacts.scss';

export default class Contacts extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="Contacts">
                <div className="Contacts__header">Контакты</div>
                <div className="Contacts__content">
                    <div className="Contacts__addresses">
                        <div className="address">
                            <div className="address__term">Адрес музея:</div>
                            <div className="address__description">
                                г. Минск,<br/>пр-т Независимости, 62
                            </div>
                        </div>
                        <div className="address">
                            <div className="address__term">Почтовый ящик:</div>
                            <div className="address__description">support@bytespace.by</div>
                        </div>
                        <div className="address">
                            <div className="address__term">Контактные телефоны:</div>
                            <div className="address__description">
                                +375295279089
                                <span className="address__name">Александр</span>
                            </div>
                            <div className="address__description">
                                +375295958276
                                <span className="address__name">Татьяна</span>
                            </div>
                            <div className="address__description">
                                +375293958277
                                <span className="address__name">Татьяна</span>
                            </div>
                        </div>
                    </div>
                    <div className="Contacts__map">
                        <Map width="100%" height="100%" center={[55.754734, 37.583314]} zoom={10}/>
                    </div>
                </div>
            </div>
        );
    }

}