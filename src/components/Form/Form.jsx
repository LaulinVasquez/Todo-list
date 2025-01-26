import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Typography from "../Typography/Typography";
import styles from "./Form.module.css";

function Form() {
  const [taskData, setTaskData] = useState({ name: "", category: "" });
  return (
    <div className={styles.form}>
      <Typography fontSize={24} bold>
        Add New Task
      </Typography>
      <Card col>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>task name</Typography>
          <input
            onChange={(e) => setTaskData({ ...taskData, name: e.target.value })}
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Category</Typography>
          <Dropdown taskData={taskData} setTaskData={setTaskData} />
        </div>
        <Button />
      </Card>
    </div>
  );
}

export default Form;
