import initData from '../store/initdata';

export const <%- redux_name %> = (state = initData.<%- redux_name %>, action) => {
    switch (action.type) {
        case "ACTION_NAME":
            return {
                ...state,
                <%- redux_name %>: action.payload.<%- redux_name %>
            }
        default:
            return state
    }
}