import {
    FETCH_INIT_MENU_DATA,
    FETCH_INIT_HOME_DATA,
    FETCH_INIT_HOME_ELEMENTS_DATA,
    FETCH_INIT_TOOLS_AND_TECH_DATA,
    FETCH_INIT_PORTFOLIO_DATA,
    FETCH_INIT_GALLERY_DATA,
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
        case FETCH_INIT_TOOLS_AND_TECH_DATA:
            return {
                ...state,
                toolsAndTech: action.payload,
                loadedToolsAndTech: true,
            };
        case FETCH_INIT_PORTFOLIO_DATA:
            return {
                ...state,
                portfolio: action.payload,
                loadedPortfolio: true,
            };
        case FETCH_INIT_GALLERY_DATA:
            return {
                ...state,
                gallery: action.payload,
                loadedGallery: true,
            };
        default: return state;
    }
}