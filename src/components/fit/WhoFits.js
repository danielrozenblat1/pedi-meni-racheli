import React, { useEffect } from 'react';
import { Check, X, Target, Award, Book, Heart, Users, Clock, DollarSign, TrendingUp } from 'lucide-react';
import styles from './WhoFits.module.css';
import Button from '../button/Button';
import ScrollReveal from 'scrollreveal';

const Fit = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'right',
      distance: '50px',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      reset: false,
      interval: 100
    });

    // אנימציה לאייקונים
    sr.reveal(`.${styles.iconWrapper}`, {
      origin: 'right',
      distance: '60px',
      duration: 700,
      interval: 150
    });

    return () => {
      sr.destroy();
    };
  }, []);

  const suitablePoints = [
    {
      text: "למדת איפור קבוע/מיקרובליידינג ואת רוצה להעמיק את הידע שיתן לך ביטחון לעבוד",
      icon: <div className={styles.iconWrapper}><Book className={styles.icon} /></div>
    },
    
    {
      text: "למדת בעבר ואת רוצה לחזור לתחום והפעם... בגדול",
      icon: <div className={styles.iconWrapper}><TrendingUp className={styles.icon} /></div>
    },
   {
      text: "את מחפשת לקבל את כל הכלים - הטכנים והמנטלים במקום אחד מרוכז",
      icon: <div className={styles.iconWrapper}><TrendingUp className={styles.icon} /></div>
    },
 
    {
      text: "רוצה להעשיר את הידע מכל סיבה ולהגיע לביטחון מלא בעבודה שלך",
      icon: <div className={styles.iconWrapper}><Users className={styles.icon} /></div>
    },
      {
      text: "מרגישה שמשהו חסר כדי שתצליחי בתחום אבל את לא יודעת בדיוק על מה להצביע",
      icon: <div className={styles.iconWrapper}><Target className={styles.icon} /></div>
    },
     
    {
      text: "את אוהבת ללמוד בקצב שלך, לא בקבוצות וללא לחץ חיצוני אחר",
      icon: <div className={styles.iconWrapper}><Clock className={styles.icon} /></div>
    },
    {
      text: "יש לך מחשב ואת רוצה להתחיל להצליח בתחום!",
      icon: <div className={styles.iconWrapper}><Heart className={styles.icon} /></div>
    },
  ];

  const notSuitablePoints = [
    {
      text: "את לא מוכנה להתמיד ולהשקיע",
      icon: <div className={styles.iconWrapper}><X className={styles.icon} /></div>
    },
 
    {
      text: "את לא מוכנה לתרגל גם מעבר לקורס עצמו",
      icon: <div className={styles.iconWrapper}><Clock className={styles.icon} /></div>
    },
  
    {
      text: "את מחפשת קיצורי דרך במקום השקעה אמיתית במקצוע",
      icon: <div className={styles.iconWrapper}><X className={styles.icon} /></div>
    },
 
  ];

  return <>
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <h1 className={styles.mainTitle}>״איך אני אדע אם הקורס מתאים לי?״</h1>
        
        <div className={styles.columnsContainer}>
          <div className={styles.column}>
            <h2 className={styles.subtitle}>
              הקורס מתאים לך אם:
            </h2>
            <ul className={styles.pointsList}>
              {suitablePoints.map((point, index) => (
                <li key={index} className={styles.point}>
                  {point.icon}
                  <span className={styles.pointText}>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.subtitle}>
              הקורס פחות מתאים לך אם:
            </h2>
            <ul className={styles.pointsList}>
              {notSuitablePoints.map((point, index) => (
                <li key={index} className={styles.point}>
                  {point.icon}
                  <span className={styles.pointText}>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
           
      </div>

      <div className={styles.mainTitle}>ובנימה אישית</div>
      
      <div className={styles.description}>
        למתכונת המנצחת הזאת הגעתי לאחר שנים של הדרכה והבנה <strong>בצרכים הבסיסיים של כל מאסטרית</strong> (הטכנים והמנטלים)
      </div>
      
      <div className={styles.description}>
        הקורס הזה נבנה מהטעויות והכאבים <strong>שחוויתי על הבשר שלי</strong> ומכל מה שאלפי התלמידות שלנו באקדמיה שיתפו אותנו <strong>לפני הכניסה לתהליך ואחריו</strong>
      </div>
      
      <div className={styles.description}>
        הקורס נועד לעשות לך סדר בראש ולרכז לך את כל הידע שאת צריכה <strong>במקום אחד!</strong> הקורס <strong>מונגש וברור</strong> כאילו רק עכשיו התחלת <strong>ללמוד את המקצוע מ-0</strong>  כדי שהוא יהיה ברמה הכי גבוהה שאפשר
      </div>
      
      <div className={styles.description}>
הייתי במקום שאת נמצאת בו עכשיו ואני יודעת שזה ממש לא קל להיות במצב הזה <br/>
אבל אם את כאן זה מראה לך שאת לא רוצה לוותר לעצמך ולמרות הכל את רוצה להצליח בתחום 
      </div>
      
      <Button text="רחלי, אני מתאימה!"/>
    </div>
 
 </>
};

export default Fit;