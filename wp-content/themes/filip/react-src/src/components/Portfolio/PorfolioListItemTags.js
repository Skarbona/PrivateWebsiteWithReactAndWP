import React from 'react';

const PorfolioListItemTags = ({ tags }) => {
    return (
        <React.Fragment>
            {tags.map(tag => (
                <a className="btn-small" disabled href="/">
                        {tag.name}
                </a>
            ))}
        </React.Fragment>
    );

};

export default PorfolioListItemTags;
