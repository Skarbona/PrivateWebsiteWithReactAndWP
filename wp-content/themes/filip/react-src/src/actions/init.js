import axios from 'axios';
import {
    FETCH_INIT_MENU_DATA,
    FETCH_INIT_HOME_DATA
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
        const menu = await axios.get('/wp-json/frontpage/page');
        dispatch({
            type: FETCH_INIT_HOME_DATA,
            payload: menu.data
        });
    } catch(e) {
        console.warn(e)
    }

};