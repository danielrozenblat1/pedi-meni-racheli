import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import editPhoto from "../../images/רחלי תדמית ללא רקע.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  const handleFormNavigation = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section ref={containerRef} className={styles.section} id="מי-אני">
        <div className={styles.container}>
          <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
            <img src={editPhoto} alt="רחלי" className={styles.image} />
          </div>

          <div className={`${styles.content} ${styles.revealItem}`}>
            <h2 className={styles.mainTitle}>נעים להכיר, רחלי לוי</h2>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                "הדרך שלי לא הייתה קלה, אבל היום אני כאן - כדי להוכיח לך שאפשר. גם את יכולה להצליח, אם רק תבחרי לא לוותר על החלום שלך."
              </p>
            </div>

            <div className={styles.textBlock}>
        
        

              <p className={styles.paragraph}>
                אני זוכרת את התקופה ההיא - בעלי ואני עם תינוקת קטנה באוטו, נוסעים בכל העיר בגשם, מחלקים פליירים בכל פינה רק כדי שמישהי תרים אליי טלפון. הייתי מלאה בחלומות, אבל גם בחוסר ביטחון ענק.
              </p>

              <div className={styles.divider}></div>

            <p className={styles.paragraph}>
  למדתי מיקרובליידינג וחלמתי להיכנס לתחום, אפילו קצת התחלתי לנסות.. אבל הפחדים היו גדולים ממני. פחדתי לטעות על הלקוחות שהגיעו אלי, פחדתי מהתגובות שלהן, פחדתי להיכשל - ובסוף, <strong>פשוט עזבתי את התחום</strong>. אמרתי לעצמי ״טוב.. זה כנראה לא בשבילי״. 
</p>
              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                אבל התשוקה אף פעם לא נעלמה. תמיד ידעתי שהמקצוע הזה בוער בי וזה מה שאני רוצה לעשות, כל מה שהיה חסר לי היה הביטחון והכלים כדי להתחיל בצורה נכונה.
              </p>

              <div className={styles.divider}></div>

<p className={styles.finalText}>
  היום אני כבר לא אותה רחלי שפחדה להתחיל. יש לי צוות מדהים של נשות מקצוע, חמישה סניפים ברחבי הארץ, והמותג שלי הפך לשם דבר בתחום.  
  <br /><br />
  פיתחתי טכניקת עבודה ייחודית בשם <strong>RL</strong> - שיטת מיקרובליידינג מדויקת ופורצת דרך, שנולדה מתוך הפחדים הכי עמוקים שלי בתחילת הדרך. שיטה שמבינה בדיוק איפה מתחילות נוטות לטעות - וצמצמה את טווח הטעויות למינימום.  
  <br /><br />
  השיטה עוררה עניין גם מעבר לים - ונסעתי במיוחד למיאמי שבארצות הברית כדי להרצות עליה ולהעביר הכשרות למקצועניות בתחומן.  
  <br /><br />
  הופעתי בכתבות, ראיונות ומגזינים מובילים כמו <strong>ישראל בידור</strong>, <strong>ישראל היום</strong> ו-<strong>ידיעות אחרונות, לאישה</strong>, והלקוחות שלי (וגם הגבות שלהן) מוכרות לכל בית במדינה.  
  <br /><br />
  היום אני יודעת שזו השליחות שלי: לעזור לעוד נשים כמוך – נשים שיודעות שיש להן פוטנציאל, שרוצות להפוך את התשוקה שלהן לקריירה אמיתית, מבטיחה ורווחית – וכל מה שחסר להן זה הכלים הנכונים: גם מנטליים, וגם טכניים.
</p>

          
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleFormNavigation}
            >
              <span className={styles.buttonIcon}>💬</span>
              בואי נתחיל את המסע שלך לביטחון ולהצלחה בתחום
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
