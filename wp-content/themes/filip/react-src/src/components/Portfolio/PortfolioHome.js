import React from 'react';
import { connect } from 'react-redux';

import PortfolioHeader from '../Home/HomePosts/HomePosts'
import PortfolioList from './PortfolioList'
import PortfolioTaxonomies from './PotrfolioTaxonomies'

import compareNumbers from '../../functions/compareNumbers'
import returnTaxonomiesList from '../../functions/returnTaxonomiesList'


const PortfolioHome = ({ portfolio }) => {

    if(!portfolio) return null;

    const catList = returnTaxonomiesList(portfolio, 0);
    catList.sort(compareNumbers);

    return (
        <React.Fragment>
            <PortfolioHeader typeOfPage="portfolio" />
            <div className="section section__portfolio" >
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align">
                            <PortfolioTaxonomies catList={catList} />
                            <PortfolioList />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
            portfolio : state.init.portfolio ? state.init.portfolio.sort(compareNumbers) : null,
        }
 };


export default connect(mapStateToProps)(PortfolioHome);
