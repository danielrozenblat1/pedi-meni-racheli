import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './Me.module.css';
import editPhoto from "../../images/רחלי תדמית ללא רקע.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);
  
  // State for form modal
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs for form fields
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const reasonRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "rachelilevy.beauty@gmail.com";

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
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden'; // מונע גלילה ברקע
  };

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto'; // מחזיר את הגלילה
    // איפוס השדות אם הטופס נסגר ללא שליחה
    if (!submitted) {
      if (fullNameRef.current) fullNameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (reasonRef.current) reasonRef.current.value = "";
      setErrors({
        fullName: '',
        phone: '',
        reason: ''
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const reason = reasonRef.current.value;
    
    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    } else {
      newErrors.fullName = '';
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    } else {
      newErrors.phone = '';
    }

    // Validate reason
    if (!reason.trim()) {
      newErrors.reason = 'נא להזין סיבת פנייה';
      valid = false;
    } else if (reason.trim().length < 5) {
      newErrors.reason = 'נא להזין לפחות 5 תווים';
      valid = false;
    } else {
      newErrors.reason = '';
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: "",
      reason: reason,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
          setErrors({
            fullName: '',
            phone: '',
            reason: ''
          });
          closeForm();
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
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
                אבל תמיד ניכר בי שלא עזבתי את התחום כי ״זה כנראה לא בשבילי״ הרגשתי פספוס ואפילו לא ידעתי למה צפו לי המון סיבות.. ועכשיו אני מבינה שכל מה שהיה חסר לי זה הבטחון והכלים כדי להתחיל בצורה נכונה
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
                היום אני יודעת שזו השליחות שלי: להגיע לאותן הנשים שהרגישו בדיוק כמוני.. עזבו את המקצוע ״כי זה פשוט לא עבורן.. ״ אבל שזאת לא התשובה הפנימית הכנה שלהן.. נשים שרוצות להפוך את התשוקה שלהן לקריירה אמיתית, מבטיחה ורווחית - וכל מה שחסר להן זה הכלים הנכונים: גם מנטליים, וגם טכניים.
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

      {/* Form Overlay */}
      {isFormOpen && (
        <div className={styles.formOverlay} onClick={closeForm}>
          <div className={styles.formModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <button className={styles.formCloseButton} onClick={closeForm}>
                <FaTimes />
              </button>
            </div>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="fullName">שם מלא</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                  placeholder="השם המלא שלך"
                  disabled={isSubmitting || submitted}
                  ref={fullNameRef}
                />
                {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">מספר טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="050-0000000"
                  disabled={isSubmitting || submitted}
                  ref={phoneRef}
                />
                {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="reason">סיבת הפנייה</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="4"
                  className={`${styles.textarea} ${errors.reason ? styles.inputError : ''}`}
                  placeholder="סיבת הפנייה"
                  disabled={isSubmitting || submitted}
                  ref={reasonRef}
                />
                {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
              </div>
              
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'רחלי, בואי נדבר!'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;