import React from 'react';
import { connect } from 'react-redux';

import PortfolioListItem from './PortfolioListItem'
import compareNumbers from "../../functions/compareNumbers";

const PortfolioList = ({ portfolio }) => {
    return (
        <div className="row">
            {
                portfolio.map(item => <PortfolioListItem
                    key={`pf-${item.id}`}
                    item={item}
                />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        portfolio : state.init.portfolio.sort(compareNumbers)
    }
};


export default connect(mapStateToProps)(PortfolioList);
