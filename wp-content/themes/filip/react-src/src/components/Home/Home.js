import React from 'react';
import { connect } from 'react-redux';

import HomeHero from './HomeHero/HomeHero';
import Loader from '../Shared/Loader';
import ToolsAndTech from '../ToolTech/ToolsAndTech'
import PortfolioHome from '../Portfolio/PortfolioHome'
import GalleryHome from '../Gallery/GalleryHome'
import ContactHome from '../Contact/ContactHome'

const Home = ({loadedHome}) => {

    if(loadedHome) {
        return (
            <React.Fragment>
                <HomeHero/>
                <ToolsAndTech />
                <PortfolioHome />
                <GalleryHome />
                <ContactHome />
            </React.Fragment>
            );
    } else {
        return (
            <React.Fragment>
                <Loader />
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
            loadedHome : state.init.loadedHome,
            loadedHomePosts : state.init.loadedHomePosts
        }
 };


export default connect(mapStateToProps)(Home);
