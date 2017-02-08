import { SHOW_ALL } from '../constants/visibilityFilters';
import { SET_VISIBILITY_FILTER } from '../constants/actionTypes';

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.payload.filter;

        default:
            return state;
    }
};

export default visibilityFilter;
