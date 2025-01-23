import styles from "./ActionButtons.module.css"

function ActionButtons({handleClick, icon}) {
  return (
    <div className={styles.actionButtons} onClick={() => handleClick()}>
        <img src={icon} alt="icon" />
    </div>
  )
}

export default ActionButtons