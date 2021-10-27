import React, { useEffect } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'

const Home = () => {

    // state lokal
    // const [dataBlog, setDataBlog] = useState([]);

    // state global
    const {dataBlogs , name} = useSelector(state => state);

    const dispatch = useDispatch();

    // console.log('State Global : ', stateGlobal);
    console.log('data blog global: ', dataBlogs);

    useEffect(() => {

        // memanggil data state yang baru
        setTimeout(() => {
            dispatch({type: 'UPDATE_NAME'})
        }, 3000)

        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            // console.log('data API : ', result.data);
            const responseApi = result.data;

            // mengubah data pada state global yang defaulnya kosong
            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseApi.data})

            // asign data ke method state
            // setDataBlog(responseApi.data);
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
            <p>{name}</p>
            <Gap height={20}/>
            <div className="content-wrapper">
                {/* menampilkan data blog dari state */}
                {dataBlogs.map(blog => {
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
