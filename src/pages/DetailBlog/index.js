import React from 'react';
import { RegisterBg } from '../../assets';
import './detailBlog.scss';

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <h3 className="blog-title">Title Blog</h3>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto blanditiis quos veniam praesentium expedita alias necessitatibus inventore hic voluptatibus. Mollitia, incidunt sequi velit corporis reiciendis voluptatibus, consectetur expedita tempore dignissimos fuga laudantium! Ea officiis quas temporibus, ex quod saepe repellat atque tempora, est maxime velit quidem placeat ipsum eum possimus delectus. A exercitationem accusamus alias possimus cum voluptates excepturi? Temporibus doloremque assumenda nulla recusandae, maiores facere dolorem quaerat asperiores!</p>
        </div>
    )
}

export default DetailBlog