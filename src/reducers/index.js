export const rootReducer = (state, action) => {
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
