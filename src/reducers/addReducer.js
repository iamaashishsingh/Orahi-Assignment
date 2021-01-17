const initialState = {
    value : false
}

export default function addReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_VALUE':
            return{
                value: action.payload
            }
    
        default:
            return state;
    }
}
