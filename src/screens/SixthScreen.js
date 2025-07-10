import IconsScreen from "../iconsScreen/ThirdScreen copy"
import styles from "./SixthScreen.module.css"

const SixthScreen = () => (
  <>
    <div className={styles.title}>טעימה קטנה מהקורס לפני שנתחיל..</div>
    <div className={styles.videoContainer}>
      <div className={styles.videoPlayer}>
        <div className={styles.videoPlaceholder}>
          <div className={styles.playButton}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className={styles.videoControls}>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>
          <div className={styles.controlsRow}>
            <div className={styles.timeDisplay}>0:00 / 0:30</div>
            <div className={styles.rightControls}>
              <button className={styles.controlButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9V15C3 15.5523 3.44772 16 4 16H20C20.5523 16 21 15.5523 21 15V9C21 8.44772 20.5523 8 20 8H4C3.44772 8 3 8.44772 3 9Z" stroke="white" strokeWidth="2"/>
                  <path d="M9 12L15 12" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
              <button className={styles.controlButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 14L17 12L19 10M5 14L7 12L5 10M3 6H21V18H3V6Z" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SixthScreen