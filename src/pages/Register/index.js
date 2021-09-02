import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss' 

const Register = () => {
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
                <Button title="Submit"/>
                <Gap height={100}/>
                <Link title="Ke Halaman Login"/>
            </div>
        </div>
    )
}

export default Register
