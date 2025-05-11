import style from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faTwitter, 
    faLinkedinIn,
    faGithub,
    faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <section id="contact">
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                {/* Quick Links */}
                <div className={style.footerSection}>
                    <h3 className={style.footerHeading}>Quick Links</h3>
                    <ul className={style.footerLinks}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={style.footerSection}>
                    <h3 className={style.footerHeading}>Contact</h3>
                    <ul className={style.footerLinks}>
                        <li><a href="mailto:taonashe87@gmail.com">taonashe87@gmail.com</a></li>
                        <li><a href="tel:+263783425833">+263 78 342 5833</a></li>
                        <li>Masasa Park , Harare</li>
                        <li>Zimbabwe</li>
                    </ul>
                    
                </div>

                <div className={style.footerSection}>
                    <h3 className={style.footerHeading}>Social Links</h3>
                    <div className={style.socialIcons}>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} className={style.socialIcon} /></a>
                    </div>
                </div>
            </div>

            <div className={style.footerBottom}>
                <p className={style.footerBottomtext}>© {new Date().getFullYear()} Taonashe Pakachena. All rights reserved. | Built with React</p>
            </div>
        </footer>
        </section>
    );
}

export default Footer;