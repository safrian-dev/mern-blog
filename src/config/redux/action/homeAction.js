import Axios from "axios";

export const setDataBlog = () => (dispatch) => {
    Axios.get('http://localhost:4000/v1/blog/posts')
    .then(result => {
        const responseApi = result.data;
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseApi.data});
    })
    .catch(err => {
        console.log('error : ', err);
    })
}
