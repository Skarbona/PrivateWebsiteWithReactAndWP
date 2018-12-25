import React from 'react';

const PorfolioListItemTags = ({ tags }) => {
    return (
        <React.Fragment>
            {tags.map(tag => (
                <button key={`item-tags-${tag.name}`}
                        className={`btn-small ${tag.acf.class_names}`}>
                        {tag.name}
                </button>
            ))}
        </React.Fragment>
    );

};

export default PorfolioListItemTags;
