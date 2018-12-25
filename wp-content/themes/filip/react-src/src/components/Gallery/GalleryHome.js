import React from 'react';

import GalleryHeader from '../Home/HomePosts/HomePosts'
import GalleryList from './GalleryList'

const GalleryHome = () => {

    return (
        <React.Fragment>
            <GalleryHeader typeOfPage="gallery" />
            <div className="section section__gallery">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align">
                               <GalleryList />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};


export default GalleryHome;
