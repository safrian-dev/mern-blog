import "./createblog.scss";
import React, { useEffect, useState } from "react";
import { Button, Input, Upload, Textarea, Gap, Link } from "../../components";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postToApi,
  updateToApi,
  setForm,
  setImgPreview,
} from "../../config/redux/action";
import Axios from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log("params :", props);
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log("data : ", data);
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    }
  }, [props, dispatch]);

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate) {
      console.log("update data");
      updateToApi(form, id);
    } else {
      console.log("create data");
      postToApi(form);
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Create Blog" onClick={() => history.push("/")} />
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>

      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />

      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />

      <Textarea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />

      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default withRouter(CreateBlog);
