import React from 'react';
import { connect } from 'react-redux';

import HomePost from './HomePost'

const HomePosts = ({homePosts}) => {
    if(!homePosts) return null;

    return (
        <React.Fragment>
            {homePosts.map((post,index) =>{
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
