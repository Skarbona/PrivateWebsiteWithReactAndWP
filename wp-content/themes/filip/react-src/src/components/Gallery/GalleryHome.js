import React from 'react';
import { connect } from 'react-redux';

import GalleryHeader from '../Home/HomePosts/HomePosts'

import compareNumbers from '../../functions/compareNumbers'

const GalleryHome = ({ gallery }) => {

    if(!gallery) return null;


    return (
        <React.Fragment>
            <GalleryHeader typeOfPage="gallery" />
            <div className="section section__gallery">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align">
                                GalleryList
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        gallery : state.init.gallery ? state.init.gallery.sort(compareNumbers) : null,
    }
};


export default connect(mapStateToProps)(GalleryHome);
