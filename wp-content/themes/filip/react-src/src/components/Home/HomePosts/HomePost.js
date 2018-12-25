import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const HomePost = ({post}) => {
    return (
        <React.Fragment>
            { ReactHtmlParser(post.content.rendered) }
        </React.Fragment>
    );
};

export default HomePost;
