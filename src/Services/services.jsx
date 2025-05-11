import style from './services.module.css'
import Card from '../Card/card.jsx'
import pic1 from '../assets/images/WEBDEV.png'
import pic3 from '../assets/images/DATABASE.png'
import pic2 from '../assets/images/UIUX.png'


function Service() {

    return(
        <section id="services">
        <div className={style.body}>
            <h1>
                Services
            </h1>
            <h3>
                What I Offer:
            </h3>

            <div className={style.service}>
            
            <Card
                icon={<img src={pic1} alt="web dev image icon" />}
                heading={<h3>Web Development</h3>}
                description={
                    <p className={style.info}>
                    Crafting sleek, user-friendly web experiences with React 
                    and JavaScript. As a junior developer, I deliver clean code 
                    and intuitive interfaces for modern web applications.
                    </p>
                }
            />
            <Card
                icon={<img src={pic3} alt="web dev image icon" />}
                heading={<h3>Database Administrator</h3>}
                description={
                    <p className={style.info}>
                    I handle database setup, queries, and maintenance using core 
                    principles. I ensure data integrity, security, and efficient 
                    organization for reliable storage and smooth retrieval—optimizing 
                    system performance through structured data management.
                    </p>
                }
            />
            <Card
                icon={<img src={pic2} alt="ui ux design image icon" />}
                heading={<h3>UI/UX Design</h3>}
                description={
                    <p className={style.info}>
                       I build intuitive, responsive interfaces that blend aesthetics 
                       with functionality. Focusing on accessibility and clean code, 
                       I turn designs into seamless digital experiences that work 
                       beautifully across all devices.
                    </p>
                }
            />
        </div>
        
        </div>
        </section>
    )
}
export default Service