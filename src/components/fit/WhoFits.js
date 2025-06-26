import React from 'react';
import { Check, X, Target, Award, Book, Heart, Users, Clock, DollarSign, TrendingUp } from 'lucide-react';
import styles from './WhoFits.module.css';
import Button from '../button/Button';

const Fit = () => {
  const suitablePoints = [
    {
      text: "למדת איפור קבוע/מיקרובליידינג ורוצה להעמיק את הידע שיתן לך ביטחון לעבוד",
      icon: <div className={styles.iconWrapper}><Book className={styles.icon} /></div>
    },
    {
      text: "מרגישה שמשהו חסר ו'עדיין לא שם' - לא יודעת בדיוק על מה להצביע",
      icon: <div className={styles.iconWrapper}><Target className={styles.icon} /></div>
    },
    {
      text: "למדת בעבר ורוצה לחזור לתחום והפעם... בגדול",
      icon: <div className={styles.iconWrapper}><TrendingUp className={styles.icon} /></div>
    },
    {
      text: "רוצה להביא ללקוחות שלך את טכניקת RL הייחודית",
      icon: <div className={styles.iconWrapper}><Award className={styles.icon} /></div>
    },
    {
      text: "מתקשה בבחירת צבע/שרטוט צורה/החלמות/שרטוט שיערות דקיקות במראה טבעי",
      icon: <div className={styles.iconWrapper}><Heart className={styles.icon} /></div>
    },
    {
      text: "רוצה להעשיר את הידע מכל סיבה ולהגיע לביטחון מלא בעבודה",
      icon: <div className={styles.iconWrapper}><Users className={styles.icon} /></div>
    }
  ];

  const notSuitablePoints = [
    {
      text: "לא רצינית או לא מוכנה להתמיד ולהשקיע באמת",
      icon: <div className={styles.iconWrapper}><X className={styles.icon} /></div>
    },
    {
      text: "לא מוכנה לתרגל גם מעבר לקורס - רק רוצה 'פתרון קסם'",
      icon: <div className={styles.iconWrapper}><Clock className={styles.icon} /></div>
    },
    {
      text: "חושבת שהלקוחות ידפקו בדלת מיד אחרי הקורס ללא מאמץ נוסף",
      icon: <div className={styles.iconWrapper}><DollarSign className={styles.icon} /></div>
    },
    {
      text: "מחפשת קיצורי דרך במקום השקעה אמיתית במקצוע",
      icon: <div className={styles.iconWrapper}><X className={styles.icon} /></div>
    }
  ];

  return <>
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <h1 className={styles.mainTitle}>״רחלי, איך אני אדע אם הקורס מתאים לי?״</h1>
        
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
          <Button text="רחלי, אני מתאימה!"/>
    </div>
 
 </>
};

export default Fit;