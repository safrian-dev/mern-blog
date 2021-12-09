import React from 'react'
// import { RegisterBg } from '../../../assets'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../..'

const BlogItem = (props) => {
    const history = useHistory();

    // destructuring props
    const {image, title, body, name, date, id, onDelete} = props;

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post"/>
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => history.push(`/create-blog/${id}`)}>Edit</p> |
                        <p className="delete" onClick={() => onDelete(id)}>Delete</p>
                    </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={30}/>
                <Button title="Read more.." onClick={() => history.push(`/detail-blog/${id}`)}/>
            </div>
        </div>
    )
}

export default BlogItem
