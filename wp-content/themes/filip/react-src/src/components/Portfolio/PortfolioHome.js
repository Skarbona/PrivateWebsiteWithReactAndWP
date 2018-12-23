import React from 'react';
import { connect } from 'react-redux';

import PortfolioHeader from '../Home/HomePosts/HomePosts'
import PortfolioList from './PortfolioList'
import PortfolioTaxonomies from './PotrfolioTaxonomies'

import compareNumbers from '../../functions/compareNumbers'

const returnTaxonomiesList = (portfolio,list) => {
    let helperArray = [];
    portfolio.map((item) => {
        let taxSingleArray = item._embedded["wp:term"][list].map(single => {
            return {
                'name': single.name,
                'classes': single.acf.class_names || '',
                'menu_order': single.acf.menu_order
            };
        });
        helperArray.push(...taxSingleArray)
    });
    return helperArray.reduce((obj, x) => {
            return obj.concat(obj.find(y => y.name === x.name) ? [] : [x])
    }, []);
};

const PortfolioHome = ({ portfolio }) => {

    if(!portfolio) return null;

    const catList = returnTaxonomiesList(portfolio, 0);
    catList.sort(compareNumbers);

    return (
        <React.Fragment>
            <PortfolioHeader typeOfPage="portfolio" />
            <div className="section section__portfolio">
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
            portfolio : state.init.portfolio.sort(compareNumbers)
        }
 };


export default connect(mapStateToProps)(PortfolioHome);
