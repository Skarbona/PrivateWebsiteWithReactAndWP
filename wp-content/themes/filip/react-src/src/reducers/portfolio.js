import {
 SET_CURRENT_PORTFOLIO_ITEMS
} from "../actions";

const initialState = {
    current: 'all'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_PORTFOLIO_ITEMS :
            return {
                ...state,
                current: action.current
            };
        default: return state;
    }
}