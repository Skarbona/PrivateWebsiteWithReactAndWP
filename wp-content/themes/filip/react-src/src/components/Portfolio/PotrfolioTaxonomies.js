import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPortfolioItems } from '../../actions/portfolio'

import PortfolioTaxonomiesItem from './PortfolioTaxonomiesItem'

const PortfolioTaxonomies = ({ catList, current, setCurrentPortfolioItems }) => {
    return (
        <React.Fragment>
            <a className="btn grey waves-effect"
               disabled={current === 'all'}
               onClick={() => setCurrentPortfolioItems('all')}>
                All Items
            </a>
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
