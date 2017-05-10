import React from 'react';

import events from './events.json';

import './Events.scss';

export default class Events extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEventsSelectorOpen: false,
            events: events.map((event, index) => {
                if (index === 0) {
                    return {...event, selected: true}
                } else {
                    return {...event, selected: false}
                }
            }),
        };

        this.handleClickEventSelector = this.handleClickEventSelector.bind(this);
        this.handleClickEventOption = this.handleClickEventOption.bind(this);
    }

    handleClickEventSelector = (e) => {
        e.preventDefault();
        this.setState(_ => ({
            isEventsSelectorOpen: !_.isEventsSelectorOpen
        }));
    };

    handleClickEventOption = (e, selectedId) => {
        e.preventDefault();
        this.setState(_ => ({
            events: _.events.map(event => {
                if (event.id === selectedId) {
                    return {...event, selected: true}
                } else {
                    return {...event, selected: false}
                }
            }),
            isEventsSelectorOpen: false
        }));
    };

    render() {
        const selectedEvent = this.state.events.find(_ => _.selected === true);

        return (
            <div className="Events">
                <div className="Events__header">Запись на экскурсию</div>
                <form action="/" className="Events__form form">
                    <div className="chosen">
                        <input type="hidden" name="clientOrder" defaultValue={selectedEvent.id}/>
                        <a className={`chosen__current ${this.state.isEventsSelectorOpen ? 'active' : ''}`} href="#"
                           onClick={this.handleClickEventSelector}>
                            <div className="chosen__option option">
                                <div className="option__description">
                                    <span>Экскурсия:</span>
                                    <span className="option__dateTime">
                                        <span className="option__date">{selectedEvent.date}</span>
                                        <span className="option__time">{selectedEvent.time}</span>
                                    </span>
                                </div>
                                <div className="option__freePlaces">Свободные места:
                                    <strong>{selectedEvent.places}</strong>
                                </div>
                            </div>
                        </a>
                        <div className={`chosen__options ${this.state.isEventsSelectorOpen ? 'active' : ''}`}>
                            {this.state.events.filter(_ => _.selected === false).map((event, index) =>
                                <a className="chosen__option option" href="#" key={index}
                                   onClick={_ => this.handleClickEventOption(_, event.id)}>
                                    <div className="option__description">
                                        <span>Экскурсия:</span>
                                        <span className="option__dateTime">
                                        <span className="option__date">{event.date}</span>
                                        <span className="option__time">{event.time}</span>
                                    </span>
                                    </div>
                                    <div className="option__freePlaces">Свободные места: <strong>{event.places}</strong>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="form__moreLink">
                        <a href="#">Подробнее об экскурсиях</a>
                    </div>
                    <input className="form__field" type="text" name="clientName" placeholder="Имя"/>
                    <input className="form__field" type="text" name="clientEmail" placeholder="Email"/>
                    <textarea className="form__field form__field_textarea" name="clientNote" placeholder="Примечание"
                              rows="4"/>
                    <div className="form__btn-field">
                        <button className="form__btn" type="submit">Записаться</button>
                    </div>
                </form>
            </div>
        );
    }

}