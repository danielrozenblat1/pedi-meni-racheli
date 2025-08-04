import React from 'react';
import styles from './FirstScreen.module.css';
import racheli from "../images/רחלי לוי תדמית ללא רקע.png"; // התמונה של רחלי לוי
import GlassCounterRow from '../components/countup/CountUp';

const FirstScreen = () => {
  const handleButtonClick = () => {
    // כאן תוכל להוסיף את הלוגיקה לכפתור
    console.log("רחלי, אני רוצה את הקורס!");
  };

  return (
    <div className={styles.container}>
      {/* Background image container with opacity */}
      <div className={styles.backgroundImage}></div>
      
      <div className={styles.intro}>
        <div className={styles.mainTextContainer}>
          <div className={styles.mainTextInner}>
            <p className={styles.mainText}>לאחר שהובילה מאות נשים לקריירה רווחית בתחום והוציאה אלפי לקוחות מרוצות <br/> רחלי לוי מציגה</p>
          </div>
        </div>
        
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>
            הדרך להפוך למומחית מיקרובליידינג{' '}
            <span className={styles.highlighted}>שבטוחה בעצמה</span>{' '}
      ולעשות לך סדר מההתחלה ועד הסוף בלי לעבור ממקום ממקום
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.highlighted}>ללא צורך בידע מקדים</span>
          </p>
        </div>
        

       <GlassCounterRow imageSrc={racheli} imageAlt="תיאור התמונה"/>
       
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button} 
            onClick={handleButtonClick}
          >
            רחלי,קחי אותי לקורס הדיגיטלי!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;