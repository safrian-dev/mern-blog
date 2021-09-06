import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../..'

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto blanditiis quos veniam praesentium expedita alias necessitatibus inventore hic voluptatibus. Mollitia, incidunt sequi velit corporis reiciendis voluptatibus, consectetur expedita tempore dignissimos fuga laudantium! Ea officiis quas temporibus, ex quod saepe repellat atque tempora, est maxime velit quidem placeat ipsum eum possimus delectus. A exercitationem accusamus alias possimus cum voluptates excepturi? Temporibus doloremque assumenda nulla recusandae, maiores facere dolorem quaerat asperiores!</p>
                <Gap height={30}/>
                <Button title="Read more.." onClick={() => history.push('/detail-blog')}/>
            </div>
        </div>
    )
}

export default BlogItem
