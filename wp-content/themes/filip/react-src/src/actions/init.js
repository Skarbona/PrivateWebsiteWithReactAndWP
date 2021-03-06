import axios from 'axios';
import {
    FETCH_INIT_MENU_DATA,
    FETCH_INIT_HOME_DATA,
    FETCH_INIT_HOME_ELEMENTS_DATA,
    FETCH_INIT_TOOLS_AND_TECH_DATA,
    FETCH_INIT_PORTFOLIO_DATA,
    FETCH_INIT_GALLERY_DATA,
} from "./index";

export const fetchAllInitData = () => dispatch => {
    dispatch(fetchInitMenuData());
    dispatch(fetchInitHomeData());
    dispatch(fetchInitHomeElementsData());
    dispatch(fetchInitToolsAndTechData());
    dispatch(fetchInitPortfolioData());
    dispatch(fetchInitPortfolioData());
    dispatch(fetchInitGalleryData());
};


export const fetchInitMenuData = () => async dispatch => {
    try {
        const menu = await axios.get('/wp-json/primary/menu');
        dispatch({
            type: FETCH_INIT_MENU_DATA,
            payload: menu.data
        });
    } catch(e) {
        console.warn(e)
    }

};

export const fetchInitHomeData = () => async dispatch => {
    try {
        const home = await axios.get('/wp-json/frontpage/page');
        dispatch({
            type: FETCH_INIT_HOME_DATA,
            payload: home.data
        });
    } catch(e) {
        console.warn(e)
    }

};

export const fetchInitHomeElementsData = () => async dispatch => {
    try {
        const homeElements = await axios.get('/wp-json/wp/v2/home_posts?per_page=100&_embed');
        dispatch({
            type: FETCH_INIT_HOME_ELEMENTS_DATA,
            payload: homeElements.data
        });
    } catch(e) {
        console.warn(e)
    }

};

export const fetchInitToolsAndTechData = () => async dispatch => {
    try {
        const toolsAndTech = await axios.get('/wp-json/wp/v2/tools_tech?per_page=100');
        dispatch({
            type: FETCH_INIT_TOOLS_AND_TECH_DATA,
            payload: toolsAndTech.data
        });
    } catch(e) {
        console.warn(e)
    }
};

export const fetchInitPortfolioData = () => async dispatch => {
    try {
        const portfolio = await axios.get('/wp-json/wp/v2/portfolio?per_page=100&_embed');
        dispatch({
            type: FETCH_INIT_PORTFOLIO_DATA,
            payload: portfolio.data
        });
    } catch(e) {
        console.warn(e)
    }
};

export const fetchInitGalleryData = () => async dispatch => {
    try {
        const gallery = await axios.get('/wp-json/wp/v2/gallery?per_page=100&_embed');
        dispatch({
            type: FETCH_INIT_GALLERY_DATA,
            payload: gallery.data
        });
    } catch(e) {
        console.warn(e)
    }
};