const initialState = {
    name: 'safrian'
}

const globalReducer = (state = initialState, action) => {

    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'safrian ganteng'
        }
    }
    
    return state;
}

export default globalReducer;