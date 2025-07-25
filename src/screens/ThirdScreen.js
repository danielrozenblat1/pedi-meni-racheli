import React from 'react';
import { FaHeartBroken, FaSignOutAlt, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';
import styles from "./ThirdScreen.module.css";
import EyebrowSyllabus from '../components/Sillabus/Sillabus';
import IconTextComponent from '../components/can copy/Can';
import infinity from "../icons/wired-outline-2177-infinity-sign-hover-draw (2).json"
import eight from "../icons/wired-outline-115-blackboard-clean-hover-pinch.json"
import team from "../icons/wired-outline-1004-management-team-loop-smooth.json"
const ThirdScreen = () => {
  return (
    <>
      <div className={styles.title}>ומנגד שמעתי גם על אלפי בנות</div>
      
      <div className={styles.description} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaHeartBroken style={{ color: '#444444', fontSize: '24px', flexShrink: 0 }} />
        <span>שכבר למדו את התחום אבל עדיין לא מרגישות בטוחות לעבוד...</span>
      </div>
      
      <div className={styles.description} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaSignOutAlt style={{ color: '#444444', fontSize: '24px', flexShrink: 0 }} />
        <span>בנות שסיימו קורסים אבל אמרו לעצמן "זה לא בשבילי" או "כנראה שאין לי את זה"
        ועזבו את המקצוע לחלוטין למרות שהשקיעו בו זמן ולא מעט כסף.</span>
      </div>
      
      <div className={styles.description} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaPuzzlePiece style={{ color: '#444444', fontSize: '24px', flexShrink: 0 }} />
        <span>וגם בנות שעובדות בתחום אבל מרגישות שמשהו חסר להן -
        לא יודעות על מה בדיוק להצביע, אבל פשוט מרגישות ש"זה עדיין לא שם".</span>
      </div>
      
      <div className={styles.title}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div className={styles.highlighted}>
            ואני יודעת כמה זה מתסכל
          </div>
        </div>
      </div>
      
      <div className={styles.description}>
        לדעת שאת רוצה להצליח אבל בסוף לוותר על החלום רק כי הדברים לא מסתדרים כמו שתכננת  
      </div>
      
      <div className={styles.title}>
        וזו הסיבה שהחלטתי להוציא את הקורס
      </div>
      
      {/* <div className={styles.description}>
        הקורס מכיל גם את כל הידע הטכני שאת צריכה לקבל מ-0 וגם את כל הכלים המנטלים כדי לצבור בטחון ולהפוך למאסטרית שמתפרנסת יפה מהתחום!
      </div> */}
          <div className={styles.description}>
            בשביל לעשות לך סדר אמיתי בדברים! בלי חצאי שיטות ובלי עוד השתלמויות צדדיות
        </div>
        
        <div className={styles.description}>
            חשוב לי שמי שלומדת את הטכניקה שלי תלמד אותה לעומק וכמו שצריך ככה שהכול יתחבר לך כמו פאזל בצורה מדוייקת! ולכן הקורס כולל למידה מעמיקה של כל התהליכים, מהבסיס ועד לפרטים הקטנים והכל במקום אחד מקיף. 
        </div>
        
        <div className={styles.description}>
            הקורס בנוי מנקודת הנחה שאת מגיעה בלי ידע מקדים ונלמד את הכול לגמרי מאפס, שלב אחר שלב!
        </div>
      <div className={styles.title}>
        וזה עובד ככה:
      </div>
      
      <EyebrowSyllabus/>
          
      <div className={styles.title}>
כל מי שרוכשת את הקורס מקבלת:
   </div>
      <div className={styles.row}>
<IconTextComponent text="גישה לקורס לשלושה חודשים מלאים! תוכלי לחזור לקורס ולחזק נקודות שפספסת במהלך הזמן" icon={infinity}/>
<IconTextComponent text="אופציה לבוא לחיזוק פרונטלי אצלנו באקדמיה" icon={eight}/>
<IconTextComponent text="תמיכה לכל שאלה שצצה לך ישירות מהצוות שלנו" icon={team}/>
      </div>
    </>
  );
};

export default ThirdScreen;