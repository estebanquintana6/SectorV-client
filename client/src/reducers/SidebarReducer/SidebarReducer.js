import { CHANGE_SIDEBAR_VISIBILITY } from '../../actions/types';

const initialState = {
    hidden: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_SIDEBAR_VISIBILITY:
            return {
                ...state,
                hidden: !state.hidden
            };

        default: 
            return state;
    }
}