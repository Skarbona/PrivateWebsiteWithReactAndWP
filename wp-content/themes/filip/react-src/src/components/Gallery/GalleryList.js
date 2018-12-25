import React from 'react';
import { connect } from 'react-redux';

import compareNumbers from '../../functions/compareNumbers'
import GalleryListItem from "../../containers/Gallery/GalleryListItem";

const GalleryList = ({ gallery }) => {

    if(!gallery) return null;

    return (
        <React.Fragment>
            { gallery.map(single => <GalleryListItem key={`gallery-${single.id}`} single={single} />) }
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        gallery : state.init.gallery ? state.init.gallery.sort(compareNumbers) : null,
    }
};


export default connect(mapStateToProps)(GalleryList);
