import React, { useState, useEffect } from 'react';
import styles from './Sillabus.module.css';
import { FiClock, FiStar, FiRefreshCw, FiAward } from 'react-icons/fi';
import Button from '../button/Button';
import ScrollReveal from 'scrollreveal';

const EyebrowSyllabus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const syllabusItems = [
    {
      title: "היכרות עם רחלי",
      subtitle: "מבוא אישי ומקצועי"
    },
    {
      title: "מבוא",
      subtitle: "יסודות עולם הגבות"
    },
    {
      title: "הרכב טיפול",
      subtitle: "כלים וחומרים נדרשים"
    },
    {
      title: "היגיינה וסטרליזציה",
      subtitle: "עקרונות בטיחות וניקיון"
    },
    {
      title: "מורפולוגיה והתאמת צורה",
      subtitle: "הכרת מבנה הפנים והגבה"
    },
    {
      title: "שרטוטים",
      children: [
        "מבוא לשרטוטים",
        "שינוי צורה",
        "סימטריה ואסימטריה",
        "קווים מנחים למציאת מבנה הגבה בהתאם לתווי הפנים",
        "שרטוט גבה ב-6 נקודות",
        "שרטוט בעזרת שבלונות"
      ]
    },
    {
      title: "פיגמנטולוגיה",
      children: [
        "מונחים כלליים בעולם הצבעים",
        "צבעי RL ובחירת צבע מותאמת",
        "השפעת התקבלות הצבע הסופי",
        "עבודה מעל טכניקות קודמות"
      ]
    },
    {
      title: "למי מתאימה השיטה",
      subtitle: "זיהוי מועמדים מתאימים"
    },
    {
      title: "העור והשפעתו על תוצאות הטיפול",
      subtitle: "הבנת סוגי עור שונים"
    },
    {
      title: "קו מנחה לכיווני צמיחה",
      subtitle: "הבנת הכיוונים הטבעיים"
    },
    {
      title: "יצירת שיערה",
      children: [
        "שלב השלד",
        "שלב השיזורים",
        "סגנונות ראש גבה"
      ]
    },
    {
      title: "תהליך קליטת הפיגמנט",
      subtitle: "הבנת תהליך הריפוי"
    },
    {
      title: "קבלת לקוחה וטפסי הסכמה",
      subtitle: "ניהול מקצועי של הלקוחה"
    },
    {
      title: "טיפול שני",
      subtitle: "השלמה ושכלול"
    },
    {
      title: "טיפול חידוש",
      subtitle: "תחזוקה ארוכת טווח"
    },
    {
      title: "הדגמות של 6 טיפולים שונים",
   
    }
  ];


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        {/* כותרת ראשית */}
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>
            קורס מיקרובליידינג בשיטת RL
          </h1>
          <p className={styles.subtitle}>קורס המיקרובליידינג הדיגיטלי המקיף בארץ</p>
        </div>

        {/* פרטי הקורס */}
        <div className={styles.courseInfo}>
          <div className={styles.infoGrid}>
            <div className={`${styles.infoCard} info-card-reveal`}>
              <div className={styles.infoIcon}>
                <FiClock />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>משך הקורס</h3>
                <p className={styles.infoText}>50 שעות אקדמיות</p>
              </div>
            </div>
            
            <div className={`${styles.infoCard} info-card-reveal`}>
              <div className={styles.infoIcon}>
                <FiStar />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>כמות טיפולים</h3>
                <p className={styles.infoText}>הקורס מכיל צפייה ב-6 טיפולים שונים</p>
              </div>
            </div>
            
            <div className={`${styles.infoCard} info-card-reveal`}>
              <div className={styles.infoIcon}>
                <FiRefreshCw />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>שיטה ייחודית</h3>
                <p className={styles.infoText}>תלמדי את שיטת RL מבית רחלי לוי</p>
              </div>
            </div>
            
            <div className={`${styles.infoCard} info-card-reveal`}>
              <div className={styles.infoIcon}>
                <FiAward />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>טיפולי חידוש</h3>
                <p className={styles.infoText}>הקורס מכיל גם צפייה בטיפול שני ובטיפול חידוש לאחר שנה</p>
              </div>
            </div>
          </div>
        </div>

        {/* מכלול הסילבוס */}
        <div className={styles.syllabusContainer}>
          
          {/* כפתור פתיחה/סגירה */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.toggleButton} syllabus-button-reveal`}
          >
            <div className={styles.buttonContent}>
              <div className={styles.buttonText}>
                <h2 className={styles.buttonTitle}>
                  סילבוס הקורס המפורט
                </h2>
                <p className={styles.buttonSubtitle}>
                  {isOpen ? 'לחצי לסגירת הסילבוס' : 'לחצי לפתיחת הסילבוס'}
                </p>
              </div>
              <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
                <svg 
                  className={styles.arrowIcon}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>

          {/* המגירה */}
          <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
            <div className={styles.drawerContent}>
              
              <div className={styles.syllabusItems}>
                {syllabusItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`${styles.syllabusItem} ${item.highlight ? styles.highlightItem : ''} syllabus-item-reveal`}
                  >
                    {item.highlight && (
                      <div className={styles.highlightGlow}></div>
                    )}
                    
                    <div 
                      className={styles.itemContent}
                      data-number={String(index + 1).padStart(2, '0')}
                    >
                      <div className={styles.itemHeader}>
                        
                        {/* תוכן הנושא */}
                        <div className={styles.itemText}>
                          <h3 className={styles.itemTitle}>
                            {item.title}
                          </h3>
                          
                          {item.subtitle && (
                            <p className={styles.itemSubtitle}>
                              {item.subtitle}
                            </p>
                          )}
                          
                          {item.children && (
                            <div className={styles.childrenList}>
                              {item.children.map((child, childIndex) => (
                                <div 
                                  key={childIndex}
                                  className={styles.childItem}
                                >
                                  <div className={styles.childDot}></div>
                                  <span className={styles.childText}>{child}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button text="רחלי אני רוצה את הקורס!"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyebrowSyllabus;