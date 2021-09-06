import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
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
                <Button title="Login" onClick={() => history.push('/')}/>
                <Gap height={100}/>
                <Link title="Belum punya akun? silakan daftar" onClick={() => history.push('/register')}/>
            </div>
        </div>
    )
}

export default Login
