import styles from "./Title.module.css";
import Typography from "../Typography/Typography";
function Title() {
  return (
    <div className={styles.titleContainer}> <Typography fontSize={30} bold>To do List</Typography> </div>
  )
}

export default Title