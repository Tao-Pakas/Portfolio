import { useRef, useEffect } from 'react';
import style from './hero.module.css';

function HeroSection() {
    const cardRef = useRef(null);
    
    // Font loading detection
    useEffect(() => {
        document.fonts.ready.then(() => {
            document.documentElement.classList.add('fonts-loaded');
        });
    }, []);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const rotateX = ((y / height) - 0.5) * 10; // Reduced rotation for better UX
        const rotateY = ((x / width) - 0.5) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            card.style.transition = 'transform 0.3s ease-out';
        }
    };

    return (
        <section id="home">
            <div 
                className={style.hero}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className={style.text}>
                    <p className={style.hi}>Hi!</p>
                    <p className={style.tao}>I'm Taonashe Pakachena</p>
                    <p className={style.aspiring}>an aspiring software developer</p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;