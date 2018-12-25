import React from 'react';
import { connect } from 'react-redux';

import PortfolioListItem from './PortfolioListItem'
import compareNumbers from "../../functions/compareNumbers";
import returnCleanTaxonomiesList from "../../functions/returnCleanTaxonomiesList";

const PortfolioList = ({ portfolio, current }) => {
    return (
        <div className="row flex">
            {
                portfolio.map(item => {
                    let taxList = returnCleanTaxonomiesList(item, 0);

                    if(taxList.includes(current) || current === 'all' ){
                        return (
                            <PortfolioListItem
                                key={`pf-${item.id}`}
                                item={item}
                            />
                        )
                    }
                })
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        portfolio : state.init.portfolio ? state.init.portfolio.sort(compareNumbers) : null,
        current: state.portfolio.current,
    }
};


export default connect(mapStateToProps)(PortfolioList);
