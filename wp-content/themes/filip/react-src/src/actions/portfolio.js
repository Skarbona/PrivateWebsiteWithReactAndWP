import {
    SET_CURRENT_PORTFOLIO_ITEMS
} from "./index";

export const setCurrentPortfolioItems = current => dispatch => {
    dispatch({
        type: SET_CURRENT_PORTFOLIO_ITEMS,
        current: current
    })
};