import React from 'react'
import { IcDiscord, IcFacebook, IcGithub, IcInstagram, IcTelegram, IcTwitter, LogoKabayan } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="Icon"/>
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoKabayan} alt="Kabayan"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={IcFacebook} alt="Facebook"/>
                    <Icon img={IcTwitter} alt="Twitter"/>
                    <Icon img={IcInstagram} alt="Instagram"/>
                    <Icon img={IcGithub} alt="Github"/>
                    <Icon img={IcTelegram} alt="Telegram"/>
                    <Icon img={IcDiscord} alt="Discord"/>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
