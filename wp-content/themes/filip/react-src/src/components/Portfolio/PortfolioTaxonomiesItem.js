import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPortfolioItems } from '../../actions/portfolio'

const PortfolioTaxonomiesItem = ({ taxItem, current, setCurrentPortfolioItems }) => {
    return (
        <button className={`btn waves-effect ${taxItem.classes}`}
           disabled={current === taxItem.name}
           onClick={() => setCurrentPortfolioItems(taxItem.name)}
        >
            {taxItem.name}
        </button>
    );
};


const mapStateToProps = state => {
    return {
        current : state.portfolio.current
    }
};
export default connect(mapStateToProps, { setCurrentPortfolioItems })(PortfolioTaxonomiesItem);
