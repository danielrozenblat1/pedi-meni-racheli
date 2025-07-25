import React, { useEffect, useState, useRef } from 'react';
import styles from './NewFirstScreen.module.css';
import racheli from "../images/רחלי לוי תדמית ללא רקע.png";
import Loader from '../components/loader/Loader';

const NewFirstScreen = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const bgImageTopRef = useRef(null);
  const bgImageBottomRef = useRef(null);

  const handleButtonClick = () => {
    console.log("רחלי, אני רוצה את הקורס!");
  };

  // טעינת התמונה
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      // אם יש שגיאה בטעינת התמונה, עדיין הצג את הקומפוננטה
      setImageLoaded(true);
    };
    img.src = racheli;
  }, []);

  // מעקב אחרי מיקום העכבר עבור אפקט הגרדיאנט
  useEffect(() => {
    if (!imageLoaded) return; // רק אם התמונה נטענה
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [imageLoaded]);

  // מעקב אחרי גלילה עבור אפקט סיבוב התמונות
  useEffect(() => {
    if (!imageLoaded) return; // רק אם התמונה נטענה
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (bgImageTopRef.current) {
        bgImageTopRef.current.style.transform = `rotate(${-15 + scrollY * 0.05}deg)`;
      }
      
      if (bgImageBottomRef.current) {
        bgImageBottomRef.current.style.transform = `rotate(${20 - scrollY * 0.03}deg)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageLoaded]);

  // אם התמונה עדיין לא נטענה, הצג את ה-Loader
  if (!imageLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {/* תמונות רקע מטושטשות עם אפקט סיבוב */}
      <div 
        ref={bgImageTopRef}
        className={styles.bgImageTop}
      ></div>
      <div 
        ref={bgImageBottomRef}
        className={styles.bgImageBottom}
      ></div>
      
      {/* גרדיאנט אינטראקטיבי */}
      <div 
        className={styles.gradientBackground} 
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(248, 249, 250, 0.8),
            rgba(233, 236, 239, 0.4) 40%,
            transparent 70%
          )`
        }}
      />
      
      <div className={styles.intro}>
        {/* Header with Glass Effect */}
        <div className={styles.mainTextContainer}>
          <div className={styles.mainTextInner}>
            <p className={styles.mainText}>
              לאחר שהובילה מאות נשים לקריירה רווחית בתחום <br/> והוציאה אלפי לקוחות מרוצות <br/> רחלי לוי מציגה
            </p>
          </div>
        </div>
        
        {/* Main Title */}
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>
            הדרך להפוך למומחית מיקרובליידינג{' '}
            <span className={styles.underlined}>שבטוחה בעצמה</span>{' '}
            ולהפוך את התשוקה לקריירה שתמיד חלמת עליה
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.highlighted}>הקורס הדיגיטלי המקיף בארץ - מהבסיס עד לפרטים הכי קטנים</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className={styles.imageContainer}>
          <img 
            src={racheli} 
            alt="רחלי לוי" 
            className={styles.profileImage}
          />
        </div>
        
        {/* CTA Button */}
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button} 
            onClick={handleButtonClick}
          >
            רחלי, קחי אותי להרשמה!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFirstScreen;