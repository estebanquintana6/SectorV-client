import { CHANGE_SIDEBAR_VISIBILITY } from '../types';

export const popSidebar = () => (dispatch) => {
    dispatch({
        type: CHANGE_SIDEBAR_VISIBILITY
    })
}