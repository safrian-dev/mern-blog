import React from 'react'
import './createblog.scss'
import { Button, Input, Upload, Textarea, Gap, Link } from '../../components'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className="blog-post">
            <Link title="Create Blog" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title" />
            <Upload />
            <Textarea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save"></Button>
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreateBlog
