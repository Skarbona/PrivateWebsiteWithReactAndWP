import {
    FETCH_INIT_MENU_DATA,
    FETCH_INIT_HOME_DATA,
    FETCH_INIT_HOME_ELEMENTS_DATA,
} from "../actions";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_INIT_MENU_DATA :
        return {
            ...state,
            menu: action.payload,
            loadedMenu: true,
        };
        case FETCH_INIT_HOME_DATA :
            return {
                ...state,
                home: action.payload,
                loadedHome: true,
            };
        case FETCH_INIT_HOME_ELEMENTS_DATA :
            return {
                ...state,
                homePosts: action.payload,
                loadedHomePosts: true,
            };
        default: return state;
    }
}