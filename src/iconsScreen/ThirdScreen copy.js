import styles from "./ThirdScreen.module.css";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import WithyouIcon from "../svg/undraw_questions_g2px.svg";
import SearchesIcon from "../svg/undraw_video-influencer_7ak0.svg"
import WrongIcon from "../svg/undraw_loading_3kqt.svg";

import ForyouIcon from "../svg/undraw_playlist_lwhi (1).svg";
import Button from "../components/button/Button";

const IconsScreen = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.subtitle}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 400,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.section}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.stepHeader}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <>
      <div className={styles.bigWrapper}>
        <div className={styles.step} itemScope itemType="https://schema.org/Course">
          <div className={styles.icons}>
            <img src={WrongIcon} alt="בלי בלבול" className={styles.iconImage} />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
       תוכלי ללמוד בקצב שלך
            </div>
            <div className={styles.section} itemProp="description">
               בלי לו׳׳זים ובלי קבוצה או לחץ חיצוני שיכול להלחיץ אותך - את לומדת בזמן שנוח לך, בקצב שלך, וצופה בהדרכות כמה שצריך עד שהכל יושב טוב בראש ובידיים.
            </div>
          </div>
        </div>

        <div className={styles.step} itemScope itemType="https://schema.org/Course">
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
             לא קלטת בפעם הראשונה? את צופה שוב ומחזירה לאחור
            </div>
            <div className={styles.section} itemProp="description">
              שיעור אחד היה פחות ברור לך? את פשוט חוזרת אליו. כל התוכן פתוח לך לצפייה ובכל פעם שתרצי לתרגל, לחזק את הטכניקה או לשמוע את ההסברים שוב את חוזרת כמה שצריך – עד שזה ברור וזורם.
            </div>
          </div>
          <div className={styles.icons}>
            <img src={SearchesIcon} alt="גישה חוזרת" className={styles.iconImage} />
          </div>
        </div>

        <div className={styles.step} itemScope itemType="https://schema.org/Course">
          <div className={styles.icons}>
            <img src={ForyouIcon} alt="לומדת מכל מקום" className={styles.iconImage} />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
              תלמדי מכל מקום ובכל זמן
            </div>
            <div className={styles.section} itemProp="description">
              כל מה שאת צריכה זה חיבור לאינטרנט ואת תוכלי להכנס לקורס מכל מקום וללמוד! בלי לשרוף ימי עבודה, בלי נסיעות ופקקים בדרכים - את פותחת את המחשב, מתחברת, לוקחת דף ועט ומתחילה ללמוד
            </div>
          </div>
        </div>


        <div className={styles.step} itemScope itemType="https://schema.org/Course">
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
             אנחנו תמיד כאן
            </div>
            <div className={styles.section} itemProp="description">
        כל שאלה שצצה לך תקבל מענה, הצוות שלנו זמין להסברים ותהי בטוחה שאת לא לבד! אנחנו איתך גם מאחורי המסך
            </div>
          </div>
          <div className={styles.icons}>
            <img src={WithyouIcon} alt="תמיד יש מענה" className={styles.iconImage} />
          </div>
        </div>

      </div>

      <Button text="רחלי, אני רוצה להתחיל!"/>
    </>
  );
};

export default IconsScreen;