// REDUCERS!!
import data from '../data';
const initialState = { data };

export const rootReducer = (state = initialState, action) => {
    console.log('in rootReducer: ', state, action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
            };
        default:
            return state;
    }
};
