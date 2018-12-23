import React from 'react';

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
                   rel="nofollow">
                    <i className="material-icons left"> scatter_plot </i>
                    Git
                </a>
            );
        }
    };

    const buttonLiveHelper = () => {
        if(live) {
            return (
                <a className="btn primary darken-1"
                   href={live}
                   target="_blank"
                   rel="nofollow">
                    <i className="material-icons left"> launch </i>
                    Live</a>
            );
        }
    };

    console.log(item);
    return (
        <div className="col s12 m6 l6 xl4">
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={image} />
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
                    <p>{item.content.rendered}.</p>
                </div>
                <div className="card-actions">
                    <div className="row">
                            <PorfolioListItemTags tags={item._embedded["wp:term"][1]} />
                    </div>
                    <hr/>
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
