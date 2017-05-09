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
            <div className="Home clearfix">

                <input id="menuCheckbox" type="checkbox" /> 

                <label htmlFor="menuCheckbox" className="Home__menuBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.737 476.737" width="50" height="50"><path d="M238.369 0C106.726 0 0 106.726 0 238.369c0 131.675 106.726 238.369 238.369 238.369 131.675 0 238.369-106.694 238.369-238.369C476.737 106.726 370.043 0 238.369 0zm127.13 349.607h-254.26c-8.772 0-15.891-7.151-15.891-15.891s7.119-15.891 15.891-15.891h254.26c8.74 0 15.891 7.151 15.891 15.891s-7.151 15.891-15.891 15.891zm0-95.347h-254.26c-8.772 0-15.891-7.151-15.891-15.891 0-8.772 7.119-15.891 15.891-15.891h254.26c8.74 0 15.891 7.119 15.891 15.891 0 8.74-7.151 15.891-15.891 15.891zm0-95.348h-254.26c-8.772 0-15.891-7.119-15.891-15.891s7.119-15.891 15.891-15.891h254.26c8.74 0 15.891 7.119 15.891 15.891s-7.151 15.891-15.891 15.891z"/></svg>
                </label>

                <div className="Home__content">

                    <div className="Home__menu">
                        <Menu></Menu>
                    </div>

                    <div className="Home__sections">
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
            </div>
        );
    }

}