import EyelashCalculator from "../components/calculate/Calculate"
import IconsScreen from "../iconsScreen/ThirdScreen copy"
import styles from "./SeventhScreen.module.css"

const SeventhScreen = () => (
  <>
  
<div className={styles.description}>הרוב המוחלט של הבנות שמסיימות את הקורס מדווחות על  <strong>שיפור הטכניקה שלהן ועלייה בבטחון העצמי שלהן במקצוע ובעצמן</strong> </div>
<div className={`${styles.description} ${styles.descriptionUnderlined}`}>
  מה שמוביל אותן להעלות מחירים ולמלא את היומן ביותר טיפולים כל חודש מחדש!
</div>
    <div className={styles.title}>מעבר לידע, לכלים ולטכניקה הייחודית שאת מקבלת</div>
    <div className={styles.description}>אני רוצה שתביני כמה מתגמל התחום ברגע שאת בטוחה בעצמך מספיק כדי להתחיל למלא את היומן ולקחת את המחיר שאת רוצה עבור טיפול</div>
   <EyelashCalculator/>
  </>
)

export default SeventhScreen