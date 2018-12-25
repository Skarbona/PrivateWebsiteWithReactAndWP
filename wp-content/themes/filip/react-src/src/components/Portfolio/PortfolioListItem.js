import React from 'react';
import ReactHtmlParser from "react-html-parser";

import PorfolioListItemTags from './PorfolioListItemTags'

const PortfolioListItem = ({ item }) => {
    const image = item.acf.feature_image || 'https://via.placeholder.com/400';
    const git = item.acf.git_repo_link || false;
    const live = item.acf.live_link || false;

    const buttonGitHelper = () => {
        if(git) {
            return (
                <a className="btn grey darken-3"
                   href={git}
                   target="_blank"
                   rel="noopener noreferrer">
                    <i className="material-icons left"> scatter_plot </i>
                    Git
                </a>
            );
        } else {
            return (
                <button className="btn grey darken-3"
                    disabled
                    >
                    <i className="material-icons left"> scatter_plot </i>
                    Git
                </button>
            )
        }
    };

    const buttonLiveHelper = () => {
        if(live) {
            return (
                <a className="btn primary darken-1"
                   href={live}
                   target="_blank"
                   rel="noopener noreferrer">
                    <i className="material-icons left"> launch </i>
                    Live</a>
            );
        } else {
            return (
                <button className="btn primary darken-1"
                   disabled
                >
                    <i className="material-icons left"> launch </i>
                    Live
                </button>
            );
        }
    };

    return (
            <div className="col s12 m6 l6 xl4 animated fadeIn">
                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={image} alt={item.title.rendered} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            {item.title.rendered}
                            <i className="material-icons right">more_vert</i>
                        </span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            {item.title.rendered}
                            <i className="material-icons right">close</i>
                        </span>
                        { ReactHtmlParser(item.content.rendered) }
                        <div className="row">
                            <PorfolioListItemTags
                                key={`portfolio-tag-${item.id}`}
                                tags={item._embedded["wp:term"][1]
                                } />
                        </div>
                    </div>
                    <hr/>
                    <div className="card-actions">
                        <div className="row">
                            <div className="col s12">
                                { buttonGitHelper() }
                                { buttonLiveHelper() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PortfolioListItem;
