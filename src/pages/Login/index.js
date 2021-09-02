import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="iamge-bg"/>
            </div>
            <div className="right">
                <h5 className="title">Login</h5>
                <Input label="Email" placeholder="Your Email"/>
                <Gap height={20}/>
                <Input label="Password" placeholder="Your Password" type="password"/>
                <Gap height={40}/>
                <Button title="Login"/>
                <Gap height={100}/>
                <Link title="Belum punya akun? silakan daftar"/>
            </div>
        </div>
    )
}

export default Login
