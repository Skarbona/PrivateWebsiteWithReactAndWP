import React from 'react';
import { connect } from 'react-redux';

import HomePost from './HomePost'

const HomePosts = ({homePosts, typeOfPage}) => {
    if(!homePosts) return null;
    let elementFilter = homePosts.filter(el => el.acf.page_name === typeOfPage);

    return (
        <React.Fragment>
            {elementFilter.map((post,index) =>{
                return <HomePost
                    key={index}
                    post={post}
                />
            })}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        homePosts : state.init.homePosts,
    }
};

export default connect(mapStateToProps)(HomePosts);
