import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPortfolioItems } from '../../actions/portfolio'

import PortfolioTaxonomiesItem from './PortfolioTaxonomiesItem'

const PortfolioTaxonomies = ({ catList, current, setCurrentPortfolioItems }) => {
    return (
        <React.Fragment>
            <button className="btn grey waves-effect"
               disabled={current === 'all'}
               onClick={() => setCurrentPortfolioItems('all')}>
                All Items
            </button>
            {catList.map(taxItem => <PortfolioTaxonomiesItem
                key={taxItem.name}
                taxItem={taxItem} />)}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
            current : state.portfolio.current
        }
 };


export default connect(mapStateToProps, { setCurrentPortfolioItems })(PortfolioTaxonomies);
