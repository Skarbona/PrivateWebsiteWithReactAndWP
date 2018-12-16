import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

class Home extends React.Component {

    state = {};

    render() {
        const { props: { home } } = this;
        if(!home) return null;
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    { ReactHtmlParser(home.content.rendered) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
            home : state.init.home
        }
 };


export default connect(mapStateToProps)(Home);
