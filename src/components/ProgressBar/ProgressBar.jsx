import styles from "./ProgressBar.module.css";

function ProgressBar({progress}) {
  return (
    <div className={styles.progressBar}>
      <p className={styles.progressValue}>{progress}</p>  
      <div className={styles.progress}></div>
    </div>
  )
}

export default ProgressBar;
