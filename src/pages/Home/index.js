import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apakah Anda yakin akan menghapus post ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then((res) => {
                console.log("Delete success :", res.data);
                dispatch(setDataBlog(counter)); //load api with current page
              })
              .catch((err) => {
                console.log("Err :", err);
              });
          },
        },
        {
          label: "Tidak",
          onClick: () => console.log("User tidak setuju"),
        },
      ],
    });
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      {/* <p>{name}</p> */}
      <Gap height={20} />
      <div className="content-wrapper">
        {/* menampilkan data blog dari state */}
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              name={blog.author.name}
              date={blog.createdAt}
              body={blog.body}
              id={blog._id}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
