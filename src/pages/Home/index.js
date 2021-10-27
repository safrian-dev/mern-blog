import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Axios from 'axios'

const Home = () => {
    const [dataBlog, setDataBlog] = useState([]);

    const stateGlobal = useSelector(state => state);
    console.log('State Global : ', stateGlobal);
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            console.log('data API : ', result.data);
            const responseApi = result.data;

            // asign data ke method state
            setDataBlog(responseApi.data);
        })
        .catch(err => {
            console.log('error : ', err);
        })
    }, [])

    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')} />
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {/* menampilkan data blog dari state */}
                {dataBlog.map(blog => {
                    return (
                        <BlogItem 
                            key={blog._id} 
                            image={`http://localhost:4000/${blog.image}`} 
                            title={blog.title} 
                            name={blog.author.name}
                            date={blog.createdAt}
                            body={blog.body}
                        />
                    )
                })}
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home
