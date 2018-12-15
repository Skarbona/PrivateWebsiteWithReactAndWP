import {
    FETCH_INIT_MENU_DATA
} from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_INIT_MENU_DATA :
            return {
                ...state,
                menu: action.payload
            };
        default: return state;
    }
}