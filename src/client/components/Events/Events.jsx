import React from 'react';
import moment from 'moment';

import './Events.scss';

export default class Events extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEventsSelectorOpen: false,
            events: []
        };

        this.handleClickEventSelector = this.handleClickEventSelector.bind(this);
        this.handleClickEventOption = this.handleClickEventOption.bind(this);
    }

    handleClickEventSelector = e => {
        e.preventDefault();

        this.setState(_ => ({
            isEventsSelectorOpen: !_.isEventsSelectorOpen
        }));
    };

    handleClickEventOption = (e, selectedId) => {
        e.preventDefault();

        this.setState(_ => ({
            events: _.events.map(event => {
                return {...event, selected: event.id === selectedId}
            }),
            isEventsSelectorOpen: false
        }));
    };

    componentWillMount() {
        !this.props.events.data.length ? this.props.handleLoadingEvents() : false;
    }

    componentWillReceiveProps(nextProps) {
        console.log(1);
        if (!this.props.events.data.length && nextProps.events.data.length) {
            this.setState({
                events: nextProps.events.data.map((event, index) => {
                    return {...event, id: event._id, selected: !!!index}
                })
            });
        }

    }

    render() {
        const selectedEvent = this.state.events.find(_ => _.selected === true);

        return (
            <div className="Events" id="events">
                <div className="Events__header">Запись на экскурсию</div>
                <form action="/" className="Events__form form">
                    <div className="form__chosen chosen">
                        <div className="chosen__title">Ближайшее мероприятие</div>
                        <input type="hidden" name="clientOrder"
                               defaultValue={selectedEvent ? selectedEvent.id : false}/>
                        <a className={`chosen__current ${this.state.isEventsSelectorOpen ? 'active' : ''}`} href="#"
                           onClick={this.handleClickEventSelector}>
                            <div className="chosen__option option">
                                <div className="option__description">
                                    <span>{selectedEvent ? selectedEvent.title : false}</span>
                                    <span className="option__dateTime">
                                        <span
                                            className="option__date">{selectedEvent ? moment(selectedEvent.date).format('DD.MM.YYYY') : false}</span>
                                        <span
                                            className="option__time">{selectedEvent ? moment(selectedEvent.date).format('HH:mm') : false}</span>
                                    </span>
                                </div>
                                <div className="option__freePlaces">
                                    Свободные места:
                                    <span className="quantity">{selectedEvent ? selectedEvent.tickets : false}</span>
                                </div>
                            </div>
                        </a>
                        <div className={`chosen__options ${this.state.isEventsSelectorOpen ? 'active' : ''}`}>
                            {this.state.events.filter(_ => _.selected === false).map((event, index) =>
                                <a className="chosen__option option" href="#" key={index}
                                   onClick={_ => this.handleClickEventOption(_, event.id)}>
                                    <div className="option__description">
                                        <span>{event.title}</span>
                                        <span className="option__dateTime">
                                        <span className="option__date">{moment(event.date).format('DD.MM.YYYY')}</span>
                                        <span className="option__time">{moment(event.date).format('HH:mm')}</span>
                                    </span>
                                    </div>
                                    <div className="option__freePlaces">
                                        Свободные места:
                                        <span className="quantity">{event.tickets}</span>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="form__moreLink">
                        <a href="#" target="_blank">Подробнее об экскурсиях</a>
                    </div>
                    <input className="form__field" type="text" name="clientName" placeholder="Имя"/>
                    <input className="form__field" type="text" name="clientEmail" placeholder="Email"/>
                    <textarea className="form__field form__field-textarea" name="clientNote" placeholder="Примечание"
                              rows="4"/>
                    <div className="form__btn-field">
                        <button className="form__btn" type="submit">Подтвердить</button>
                    </div>
                </form>
            </div>
        );
    }

}