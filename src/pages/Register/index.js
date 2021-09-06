import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss' 
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory(); 
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="iamge-bg"/>
            </div>
            <div className="right">
                <h5 className="title">Register</h5>
                <Input label="Fullname" placeholder="Your Fullname"/>
                <Gap height={20}/>
                <Input label="Email" placeholder="Your Email"/>
                <Gap height={20}/>
                <Input label="Password" placeholder="Your Password" type="password"/>
                <Gap height={40}/>
                <Button title="Submit" onClick={() => history.push('/login')}/>
                <Gap height={100}/>
                <Link title="Ke Halaman Login" onClick={() => history.push('/login')}/>
            </div>
        </div>
    )
}

export default Register
