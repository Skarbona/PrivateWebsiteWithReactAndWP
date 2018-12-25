import React from 'react';
import { connect } from 'react-redux';

import HomeHero from './HomeHero/HomeHero';
import Loader from '../Shared/Loader';
import ToolsAndTech from '../ToolTech/ToolsAndTech'
import PortfolioHome from '../Portfolio/PortfolioHome'
import GalleryHome from '../Gallery/GalleryHome'
import ContactHome from '../Contact/ContactHome'

const Home = ({loadedHome, refHome, refTools, refPortfolio, refGallery, refContact }) => {
    if(loadedHome) {
        return (
            <React.Fragment>
                <div ref={refHome}>
                    <HomeHero />
                </div>
                <div ref={refTools}>
                    <ToolsAndTech />
                </div>
                <div ref={refPortfolio}>
                    <PortfolioHome />
                </div>
                <div ref={refGallery}>
                    <GalleryHome />
                </div>
                <div ref={refContact}>
                    <ContactHome />
                </div>
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
