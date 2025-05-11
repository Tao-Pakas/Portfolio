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
        <Footer className={style.footer}>
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
                        <li><a href="mailto:contact@example.com">contact@example.com</a></li>
                        <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                        <li>123 Street, City</li>
                        <li>Country</li>
                    </ul>
                    <div className={style.socialIcons}>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className={style.socialIcon} /></a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} className={style.socialIcon} /></a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className={style.footerSection}>
                    <h3 className={style.footerHeading}>Stay Updated</h3>
                    <form className={style.newsletterForm}>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className={style.newsletterInput}
                            required
                        />
                        <button type="submit" className={style.newsletterButton}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className={style.footerBottom}>
                <p>© {new Date().getFullYear()} Taonashe Pakachena. All rights reserved. | Built with React</p>
            </div>
        </Footer>
        </section>
    );
}

export default Footer;