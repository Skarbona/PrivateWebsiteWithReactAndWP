import axios from 'axios';
import {
    FETCH_INIT_MENU_DATA,
    FETCH_INIT_HOME_DATA,
    FETCH_INIT_HOME_ELEMENTS_DATA,
} from "./index";

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
        const homeElements = await axios.get('/wp-json/wp/v2/home_posts');
        dispatch({
            type: FETCH_INIT_HOME_ELEMENTS_DATA,
            payload: homeElements.data
        });
    } catch(e) {
        console.warn(e)
    }

};