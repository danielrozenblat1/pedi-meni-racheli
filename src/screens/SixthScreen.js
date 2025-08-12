import IconsScreen from "../iconsScreen/ThirdScreen copy"
import styles from "./SixthScreen.module.css"

const SixthScreen = () => (
  <>
    <div className={styles.title}>טעימה קטנה מהקורס לפני שנתחיל..</div>
    <div className={styles.videoContainer}>
      <div className={styles.videoPlayer}>
        <iframe
          className={styles.youtubePlayer}
          src="https://www.youtube-nocookie.com/embed/GG0uzykR6ZQ"
          title="Course Preview Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className={styles.videoPlayer}>
      <iframe
        className={styles.instagramReel}
        src="https://www.instagram.com/p/C7mHmLzoOFW/embed"
        title="Instagram Reel"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  </>
)

export default SixthScreen