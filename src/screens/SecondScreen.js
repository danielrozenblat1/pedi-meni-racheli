import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import needle from "../icons/wired-outline-775-needle-hover-pinch.json"
import learn from "../icons/wired-outline-2454-learn-more-hover-loading.json"
import secure from "../icons/wired-outline-25-error-cross-hover-loading.json"
import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
const SecondScreen=()=><>
    <div className={styles.title}>לא הגעת לכאן סתם</div>
    <div className={styles.description}>את כאן כי יש לך תשוקה לתחום הגבות וכנראה כבר עברת הכשרה בתחום אבל משהו עדין מעכב אותך מלהפוך את התשוקה שלך באמת לקריירה רווחית </div>
 <div className={styles.title}>את מרגישה ש</div>
    <div className={styles.row}>
        <IconTextComponent text="הטכניקה שלך עדיין לא טובה מספיק כדי שישלמו לך" icon={needle} />
        <IconTextComponent text="אין לך עדיין מספיק בטחון כדי לקבל לקוחות ואת מפחדת לטעות עליהן" icon={secure} />
        <IconTextComponent text="הקורס שעברת לא היה מספיק טוב וחסר לך ידע מקצועי" icon={learn} />
    </div>
    <div className={styles.description}>ואני רוצה שתדעי שזה לגיטימי! הייתי בדיוק במצב שאת נמצאת בו עכשיו ובדיוק מהסיבה הזו אני כאן לעזור לך</div>
  <div className={styles.title}>להגיע למצב שאת</div> 

<BenefitsContainer/>
<div className={styles.title}>והפעם, את תלמדי הכל מא׳ ועד ת׳</div> 
<div className={styles.description}>
  כי הגיע הזמן <strong>לעשות סוף לבלאגן</strong> - את לא צריכה לחפש יותר שיטות ביוטיוב, קורסים חצי-אפויים או להשתתף בעוד סדנה קטנה בתקווה שדווקא היא תעשה לך סדר.
</div>

<div className={styles.description}>
  כאן את הולכת ללמוד את <strong>שיטת העבודה המדויקת, המקיפה והברורה ביותר</strong> - צעד אחר צעד, בלי קפיצות, בלי לדלג, ו<strong>בלי להשאיר אותך עם סימני שאלה</strong>.
</div>

<div className={styles.description}>
  כל שלב בקורס נבנה כדי להפוך אותך לבעלת מקצוע בטוחה, מדויקת ומבוקשת - גם אם את מרגישה שכרגע את עוד לא שם. אני לוקחת אותך לשם, <strong>ביחד</strong>.
</div>


</>
export default SecondScreen