import React from 'react';
import { connect } from 'react-redux';


import HomePost from './HomePosts/HomePosts';
import HomeHero from './HomeHero/HomeHero';
import Loader from '../Shared/Loader';

const Home = ({loadedHomePosts, loadedHome}) => {

    if(loadedHomePosts && loadedHome) {
        return (
            <React.Fragment>
                <HomeHero/>
                <HomePost/>
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
