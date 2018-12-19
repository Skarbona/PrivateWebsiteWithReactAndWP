import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const HomeHero = ({ home }) => {
    const transformHTML = (node,index) => {
        if(node.attribs && node.attribs['data-info-link']) {
            return (
                <Link key={`hero-${index}`}
                      to={node.attribs['data-info-link']}
                      className="waves-effect btn primary darken-1"
                >
                    {node.attribs['data-info-text'] ? node.attribs['data-info-text'] : 'Button'}
                </Link>
            )

        }

    };

    const htmlHelper = () => {
        if(!home) return null;
        const options = {
            decodeEntities: true,
            transform: transformHTML
        };

        return ReactHtmlParser(home.content.rendered , options)
    };

    return (
        <React.Fragment>
            { htmlHelper() }
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        home : state.init.home,
    }
};

export default connect(mapStateToProps)(HomeHero);
