const initialStateHome = {
    dataBlog: [],
    page: {
        currentPage: 1,
        totalPage: 1
    }
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

    if(action.type === 'UPDATE_PAGE') {
        return {
            ...state,
            page: action.payload
        }
    }

    return state;
}

export default homeReducer;