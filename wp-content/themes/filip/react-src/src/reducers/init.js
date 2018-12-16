import {
    FETCH_INIT_MENU_DATA,
    FETCH_INIT_HOME_DATA
} from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_INIT_MENU_DATA :
        return {
            ...state,
            menu: action.payload
        };
        case FETCH_INIT_HOME_DATA :
            return {
                ...state,
                home: action.payload
            };
        default: return state;
    }
}