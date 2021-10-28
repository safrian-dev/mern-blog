import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDataBlog } from '../../config/redux/action'

const Home = () => {

    const [counter, setCounter] = useState(1);
    const {dataBlog, page} = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    console.log('Page : ', page);

    useEffect(() => {

        dispatch(setDataBlog(counter));
        
    }, [counter, dispatch])

    const history = useHistory();

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
        console.log(counter);
    }
    
    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        console.log(counter);
    }

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')} />
            </div>
            {/* <p>{name}</p> */}
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
                <Button title="Previous" onClick={previous}/>
                <Gap width={20}/>
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20}/>
                <Button title="Next" onClick={next}/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home
