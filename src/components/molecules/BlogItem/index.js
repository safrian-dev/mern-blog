import React from 'react'
// import { RegisterBg } from '../../../assets'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../..'

const BlogItem = (props) => {
    const history = useHistory();

    // destructuring props
    const {image, title, body, name, date} = props;

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post"/>
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={30}/>
                <Button title="Read more.." onClick={() => history.push('/detail-blog')}/>
            </div>
        </div>
    )
}

export default BlogItem
