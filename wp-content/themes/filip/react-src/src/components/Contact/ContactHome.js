import React from 'react';
import { connect } from 'react-redux';

import ContactHeader from '../Home/HomePosts/HomePosts'
import ContactInfo from '../../containers/Contact/ContactInfo'

const ContactHome = () => {

    return (
        <React.Fragment>
            <ContactHeader typeOfPage="contact" />
            <div className="section section__contact no-pad" id="contact">
               <ContactInfo />
            </div>
        </React.Fragment>
    );
};


export default connect(null)(ContactHome);
