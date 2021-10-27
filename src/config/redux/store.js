const { createStore } = require("redux");

const initialState = {
    dataBlogs: [],
    name: 'safrian'
}

const reducer = (state = initialState, action) => {

    // merubah value dari globalstate
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            // data pada state yang lama
            ...state,

            // data state yang baru
            dataBlogs: action.payload
        }
    }

    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'safrian ganteng'
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;