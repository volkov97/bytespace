import React from 'react';

import About from '../../components/About/About';
import CompaniesGallery from '../../components/CompaniesGallery/CompaniesGallery';
import ComputersGallery from '../../components/ComputersGallery/ComputersGallery';
import Contacts from '../../components/Contacts/Contacts';
import Events from '../../components/Events/Events';
import Menu from '../../components/Menu/Menu';
import Reviews from '../../components/Reviews/Reviews';
import WelcomeScreen from '../../components/WelcomeScreen/WelcomeScreen';
import Footer from '../../components/Footer/Footer';

import './Home.scss';

export default class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="Home">
                <div className="Home__menu">
                    <Menu></Menu>
                </div>
                <div className="Home__content">
                    <WelcomeScreen />
                    <About />
                    <ComputersGallery />
                    <CompaniesGallery />
                    <Reviews />
                    <Events />
                    <Contacts />
                    <Footer />
                </div>
            </div>
        );
    }

}