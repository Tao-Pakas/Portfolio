import style from './projects.module.css'
import pic from '../assets/images/PYTHON.png'

function Projects(){

    const project=[
        {
            Image: pic,
            title: "Project 1",
            tools: ["React", "Figma", "Python"],
            description: "this is the description "
        }
    ];

    return(
        <section id="projects">
            <div className={style.projectsContainer}>
                <h1 className={style.heading}>Project Portfolio</h1>
                <h3 className={style.subHeading}>Selected works demonstrating technical expertise:</h3>
                <div className={style.cardsContainer}>
                {project.map((project, index) =>(
                    <div key={index} className={style.projectCard}>
                        <img src={project.Image} alt="" className={style.pic}/>
                        <div className={style.projectDescription}>
                            <h3 className={style.textD}>{project.title}</h3>
                            <div className={style.projectTools}>
                                {project.tools.map((tool,i) =>(
                                    <span key={i}>{tool}</span>
                                ))}
                            </div>
                            <p className={style.descriptiontext}>{project.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
export default Projects