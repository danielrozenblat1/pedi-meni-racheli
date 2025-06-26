import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import needle from "../icons/wired-outline-775-needle-hover-pinch.json"
import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
const SecondScreen=()=><>
    <div className={styles.title}>לא הגעת לכאן סתם</div>
    <div className={styles.description}>את כאן כי יש לך תשוקה לתחום הגבות ואולי אפילו כבר עברת הכשרה בתחום אבל משהו עדין מעכב אותך מלהפוך את התשוקה שלך באמת לקריירה רווחית </div>
 <div className={styles.title}>את מרגישה ש</div>
    <div className={styles.row}>
        <IconTextComponent text="הטכניקה שלך עדיין לא טובה מספיק כדי שישלמו לך" icon={needle} />
        <IconTextComponent text="אין לך עדיין מספיק בטחון כדי לקבל לקוחות ואת מפחדת לטעות עליהן" icon={needle} />
        <IconTextComponent text="הקורס שעברת לא היה מספיק טוב וחסר לך הרבה ידע מקצועי" icon={needle} />
    </div>
    <div className={styles.description}>ואני רוצה שתדעי שזה לגיטימי! הייתי בדיוק במצב שאת נמצאת בו עכשיו ובדיוק מהסיבה הזו אני כאן לעזור לך</div>
  <div className={styles.title}>להגיע למצב שאת</div> 

<BenefitsContainer/>

</>
export default SecondScreen