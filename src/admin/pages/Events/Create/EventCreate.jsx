import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetRow from '../../../components/layouts/WidgetRow/WidgetRow';
import Input from '../../../components/widgets/Input/Input';
import Switch from '../../../components/widgets/Switch/Switch';
import DatePicker from '../../../components/widgets/DatePicker/DatePicker';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../../libs/parse';

export default class EventCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            buttons: [
                {
                    name: 'Добавить',
                    type: 'submit',
                    style: 'green'
                }
            ]
        }
    }

    handleForm(e) {
        const form = e.currentTarget;
        e.preventDefault();

        this.state.currentId
            ? this.props.handlePutEvent(this.state.currentId, parse.parseForm(form))
            : this.props.handlePostEvent(parse.parseForm(form));
    }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение события' : 'Добавление события');
        !this.props.events.data.length && this.state.currentId ? this.props.handleLoadingEvents() : this.props.flushEvent();
    }

    render() {
        const event = this.props.events.data.length ? this.props.events.data.filter(_ => _._id === this.state.currentId )[0] : false;
        return (
            <div className="CreateChamps">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Добавить событие" showButtons buttons={this.state.buttons}>
                        {!this.props.events.isLoading
                            ?
                            <div>
                                <WidgetRow title="Название" name="title" isRequired>
                                    <Input name="title"
                                           value={event ? event.title : 'Экскусия'}/>
                                </WidgetRow>
                                <WidgetRow title="Колличество мест" name="tickets" isRequired>
                                    <Input name="tickets"
                                           value={event ? event.tickets : 0}/>
                                </WidgetRow>
                                <WidgetRow title="Дата проведения" name="date">
                                    <DatePicker name="date"
                                                value={event ? event.date : undefined}/>
                                </WidgetRow>
                                <WidgetRow title="Публиковать" name="publishStatus">
                                    <Switch name="publishStatus"
                                            value={event ? event.publishStatus : false}/>
                                </WidgetRow>
                            </div>
                            :
                            <Loader/>
                        }
                    </Block>
                </form>
            </div>
        )
    }
}
