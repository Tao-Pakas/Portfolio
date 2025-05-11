import style from './tools.module.css';
import ToolCard from '../Card/toolcard';
import pic1 from '../assets/images/PYTHON.png';
import pic2 from '../assets/images/FIGMA.png';
import pic3 from '../assets/images/JAVA.jpg';
import pic4 from '../assets/images/REACT.png';
import pic5 from '../assets/images/JAVASCRIPT.png';
import pic6 from '../assets/images/MYSQL.png';

function Tools() {
  const cards = [
    { img: pic1, alt: "Python", name: "Python" },
    { img: pic2, alt: "Figma", name: "Figma" },
    { img: pic3, alt: "Java", name: "Java" },
    { img: pic4, alt: "React", name: "React" },
    { img: pic5, alt: "JavaScript", name: "JavaScript" },
    { img: pic6, alt: "MySQL", name: "MySQL" },
  ];

  const skills = [
    { name: "Web Development", level: 70 },
    { name: "UI/UX Design", level: 70 },
    { name: "Database Design", level: 30 },
    { name: "Mobile Apps", level: 25 },
  ];

  return (
    <section id="skills">
      <div className={style.body}>
        <h1>Skills & Tools</h1>
        <h3>My technical capabilities and preferred technologies:</h3>

        <h5>Skills :</h5>
        {/* New Skills Grid Section */}
        <div className={style.skillsContainer}>
          {skills.map((skill, index) => (
            <div className={style.skillItem} key={index}>
              <div className={style.skillName}>{skill.name}</div>
              <div className={style.skillLevel}>
                <div 
                  className={style.skillProgress} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <h5>Tools :</h5>
        {/* Existing Tools Carousel (unchanged) */}
        <div className={style.scroll}>
          <div className={style.tools}>
            {[...cards, ...cards].map((card, index) => (
              <div className={style.card} key={index}>
                <ToolCard
                  icon={<img src={card.img} alt={`${card.alt} icon`} />}
                  name={<h3>{card.name}</h3>}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Tools;