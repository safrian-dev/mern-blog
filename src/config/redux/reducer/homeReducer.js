const initialStateHome = {
    dataBlog: [],
}

const homeReducer = (state = initialStateHome, action) => {

    // merubah value dari globalstate
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            // data pada state yang lama
            ...state,
    
            // data state yang baru
            dataBlog: action.payload
        }
    }

    return state;
}

export default homeReducer;