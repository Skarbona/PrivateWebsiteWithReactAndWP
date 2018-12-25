import React from 'react';
import { connect } from 'react-redux';

import ScrollAnimation from 'react-animate-on-scroll';

import compareNumbers from '../../functions/compareNumbers'
import TechElements from '../Home/HomePosts/HomePosts';

const delayFunction = (index) => {
    let delay = index % 3;
    return delay * 300;
};

const ToolsAndTech = ({tt}) => {
    if(!tt) return null;

    return (
        <div className="section section__tools-and-tech">
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <TechElements typeOfPage="tech" />
                    </div>
                        { tt.map((t,index) => {
                          return (
                                  <div className="col l4 m6 s12 center-align"
                                       key={`tt-${t.id}`}>
                                      <ScrollAnimation animateIn="fadeIn" delay={delayFunction(index)}>
                                        <img
                                            src={t.acf.feature_image}
                                            alt={t.title.rendered.replace('&#038;', '&')}
                                        />
                                      </ScrollAnimation>
                                  </div>
                          );
                        })}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
            tt : state.init.toolsAndTech ? state.init.toolsAndTech.sort(compareNumbers) : null
        }
 };


export default connect(mapStateToProps)(ToolsAndTech);
