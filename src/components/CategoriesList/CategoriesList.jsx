import styles from "./Categories.module.css";
import { categories } from "../../utils/categories";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { changeCategory } from "../../reducer/todoSlice";

function CategoriesList() {
  const dispatch = useDispatch();
  return (
    <div className={styles.list}>
      {categories.map((category) => (
        <Card
          key={category.name}
          col
          handleClick={() => dispatch(changeCategory(category.name))}
        >
          <img src={category.icon} alt="icon" />
          <p>{category.name}</p>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesList;
