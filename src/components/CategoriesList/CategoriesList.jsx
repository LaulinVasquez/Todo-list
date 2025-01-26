import styles from "./Categories.module.css"
import { categories } from "../../utils/categories";
import Card from "../Card/Card";
function CategoriesList() {
  return (
    <div className={styles.list}>
      {categories.map((category) => (
        <Card key={category.name} col>
            <img src={category.icon} alt="icon"/>
            <p>{category.name}</p>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesList;
