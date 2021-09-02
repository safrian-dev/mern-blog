import React from 'react'
import './createblog.scss'

import { Button, Input, Upload, Textarea, Gap } from '../../components'

const CreateBlog = () => {
    return (
        <div className="blog-post">
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
