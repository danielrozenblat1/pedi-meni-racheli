import React, { useState, useEffect } from 'react';
import styles from './CountUp.module.css';

const CounterItem = ({ target, label, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    const endValue = target;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target, duration]);

  return (
    <div className={styles.counterItem}>
      <div className={styles.counterNumber}>
        {count}<span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

const GlassCounterRow = ({ 
  imageSrc = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  imageAlt = "Background image",
  counters = [
    { target: 6, label: "טיפולים שונים בקורס", suffix: "" },
    { target: 250, label: "נשים שעברו את ההכשרה", suffix: "+" },
    { target: 50, label: "שעות לימוד בסה׳׳כ", suffix: "" }
  ]
}) => {
  return (
    <div className={styles.container}>
      <img 
        src={imageSrc} 
        alt={imageAlt}
        className={styles.backgroundImage}
      />
      
      <div className={styles.glassCounterContainer}>
        <div className={styles.glassCounterRow}>
          {counters.map((counter, index) => (
            <React.Fragment key={index}>
              <CounterItem 
                target={counter.target}
                label={counter.label}
                suffix={counter.suffix}
                duration={counter.duration || 2000}
              />
              {index < counters.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
          ))}
          <div className={styles.glassOverlay}></div>
        </div>
      </div>
    </div>
  );
};

export default GlassCounterRow;