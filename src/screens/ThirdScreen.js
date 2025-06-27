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
      
      <div className={styles.description}>
        הקורס מכיל גם את כל הידע הטכני שאת צריכה לקבל מ-0 וגם את כל הכלים המנטלים כדי לצבור בטחון ולהפוך למאסטרית שמתפרנסת יפה מהתחום!
      </div>
      
      <div className={styles.title}>
        אז תחזיקי חזק.. זה עובד ככה:
      </div>
      
      <EyebrowSyllabus/>
          
      <div className={styles.title}>
וכמובן שכל מי שרוכשת את הקורס מקבלת:
   </div>
      <div className={styles.row}>
<IconTextComponent text="גישה לקורס לכל החיים! תוכלי לחזור לקורס ולחזק נקודות שפספסת במהלך הזמן" icon={infinity}/>
<IconTextComponent text="אופציה לבוא לחיזוק פרונטלי אצלנו באקדמיה" icon={eight}/>
<IconTextComponent text="תמיכה לכל שאלה שצצה לך ישירות מהצוות שלנו" icon={team}/>
      </div>
    </>
  );
};

export default ThirdScreen;