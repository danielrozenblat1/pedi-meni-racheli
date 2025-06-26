import React, { useEffect } from 'react';
import styles from './Certificates.module.css';
import ScrollReveal from 'scrollreveal';

// Import all images from 1 to 44
import work1 from "../../images/רחלי לוי עבודות 1.png";
import work2 from "../../images/רחלי לוי עבודות 2.png";
import work3 from "../../images/רחלי לוי עבודות 3.png";
import work4 from "../../images/רחלי לוי עבודות 4.png";
import work5 from "../../images/רחלי לוי עבודות 5.png";
import work6 from "../../images/רחלי לוי עבודות 6.png";
import work7 from "../../images/רחלי לוי עבודות 7.png";
import work8 from "../../images/רחלי לוי עבודות 8.png";
import work9 from "../../images/רחלי לוי עבודות 9.png";
import work10 from "../../images/רחלי לוי עבודות 10.png";
import work11 from "../../images/רחלי לוי עבודות 11.png";
import work12 from "../../images/רחלי לוי עבודות 12.png";
import work13 from "../../images/רחלי לוי עבודות 13.png";
import work14 from "../../images/רחלי לוי עבודות 14.png";
import work15 from "../../images/רחלי לוי עבודות 15.png";
import work16 from "../../images/רחלי לוי עבודות 16.png";
import work17 from "../../images/רחלי לוי עבודות 17.png";
import work18 from "../../images/רחלי לוי עבודות 18.png";
import work19 from "../../images/רחלי לוי עבודות 19.png";
import work20 from "../../images/רחלי לוי עבודות 20.png";
import work21 from "../../images/רחלי לוי עבודות 21.png";
import work22 from "../../images/רחלי לוי עבודות 22.png";
import work23 from "../../images/רחלי לוי עבודות 23.png";
import work24 from "../../images/רחלי לוי עבודות 24.png";
import work25 from "../../images/רחלי לוי עבודות 25.png";
import work26 from "../../images/רחלי לוי עבודות 26.png";
import work27 from "../../images/רחלי לוי עבודות 27.png";
import work28 from "../../images/רחלי לוי עבודות 28.png";
import work29 from "../../images/רחלי לוי עבודות 29.png";
import work30 from "../../images/רחלי לוי עבודות 30.png";
import work31 from "../../images/רחלי לוי עבודות 31.png";
import work32 from "../../images/רחלי לוי עבודות 32.png";
import work33 from "../../images/רחלי לוי עבודות 33.png";
import work34 from "../../images/רחלי לוי עבודות 34.png";
import work35 from "../../images/רחלי לוי עבודות 35.png";
import work36 from "../../images/רחלי לוי עבודות 36.png";
import work37 from "../../images/רחלי לוי עבודות 37.png";
import work38 from "../../images/רחלי לוי עבודות 38.png";
import work39 from "../../images/רחלי לוי עבודות 39.png";
import work40 from "../../images/רחלי לוי עבודות 40.png";
import work41 from "../../images/רחלי לוי עבודות 41.png";
import work42 from "../../images/רחלי לוי עבודות 42.png";
import work43 from "../../images/רחלי לוי עבודות 43.png";
import work44 from "../../images/רחלי לוי עבודות 44.png";

// Import background image - replace with your actual background image path
import backgroundImage from "../../images/רחלי.png"; // החלף בנתיב התמונה שלך

const Certificates = () => {
  // חלוקת התמונות לשני מערכים של 22 תמונות כל אחד
  const firstCarouselImages = [
    work1, work2, work3, work4, work5, work6, work7, work8, work9, work10,
    work11, work12, work13, work14, work15, work16, work17, work18, work19, work20,
    work21, work22
  ];

  const secondCarouselImages = [
    work23, work24, work25, work26, work27, work28, work29, work30, work31, work32,
    work33, work34, work35, work36, work37, work38, work39, work40, work41, work42,
    work43, work44
  ];

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.main-image-reveal', {
      distance: '100px',
      origin: 'bottom',
      duration: 1200,
      delay: 200,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      reset: false
    });

    // Reveal title with a slight delay
    ScrollReveal().reveal('.title-reveal', {
      distance: '50px',
      origin: 'top',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      opacity: 0,
      reset: false
    });

    // Reveal carousels with stagger
    ScrollReveal().reveal('.carousel-reveal', {
      distance: '80px',
      origin: 'left',
      duration: 1000,
      delay: 400,
      easing: 'ease-out',
      opacity: 0,
      reset: false,
      interval: 200
    });

    // Cleanup function
    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  return (
    <>
      <div className={`${styles.title} title-reveal`}>בעשור האחרון עברו דרכי אלפי נשים</div>
      
      <div className={styles.mainContainer}>
        {/* התמונה הרגילה */}
        <div className={`${styles.imageContainer} main-image-reveal`}>
          <img
            src={backgroundImage}
            alt="רחלי"
            className={styles.mainImage}
          />
        </div>
        
        {/* הקרוסלה הראשונה (למטה) */}
        <div className={`${styles.carouselContainer} carousel-reveal`}>
          <div className={styles.scrollTrack}>
            {/* קבוצה ראשונה של תמונות */}
            <div className={styles.scrollContainer}>
              {firstCarouselImages.map((img, index) => (
                <div key={`first-${index}`} className={styles.imageWrapper}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 1}`}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
            {/* קבוצה שנייה זהה של תמונות */}
            <div className={styles.scrollContainer}>
              {firstCarouselImages.map((img, index) => (
                <div key={`first-second-${index}`} className={styles.imageWrapper}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 1}`}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* הקרוסלה השנייה (למעלה) */}
        <div className={`${styles.carouselContainer2} carousel-reveal`}>
          <div className={styles.scrollTrack2}>
            {/* קבוצה ראשונה של תמונות */}
            <div className={styles.scrollContainer}>
              {secondCarouselImages.map((img, index) => (
                <div key={`second-${index}`} className={styles.imageWrapper2}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 23}`}
                    className={styles.image2}
                  />
                </div>
              ))}
            </div>
            {/* קבוצה שנייה זהה של תמונות */}
            <div className={styles.scrollContainer}>
              {secondCarouselImages.map((img, index) => (
                <div key={`second-second-${index}`} className={styles.imageWrapper2}>
                  <img
                    src={img}
                    alt={`עבודה ${index + 23}`}
                    className={styles.image2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;