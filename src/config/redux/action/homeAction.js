import Axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    .then((result) => {
      const responseApi = result.data;
      dispatch({
        type: "UPDATE_DATA_BLOG",
        payload: responseApi.data,
      });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseApi.current_page,
          totalPage: Math.ceil(responseApi.total_data / responseApi.per_page),
        },
      });
    })
    .catch((err) => {
      console.log("error : ", err);
    });
};
