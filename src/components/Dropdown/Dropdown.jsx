import style from "./Dropdown.module.css";
import arrow from "../../assets/icons8-arrow.png";
import { categories } from "../../utils/categories";
import { useState } from "react";

function Dropdown({ setTaskData, taskData }) {
  const [openedDropdown, setOpenDropdown] = useState(false);
  return (
    <div className={style.dropdown}>
      <div
        className={style.dropdownHeader}
        onClick={() => setOpenDropdown(!openedDropdown)}
      >
        <p>{taskData.category? taskData.category : "Select a category"}</p>{" "}
        <img className={style.arrow} src={arrow} alt="dropdown-arrow" />
      </div>
      {openedDropdown && (
        <div className={style.dropdownContent}>
          {categories.map((category) => (
            <p
              key={category.name}
              onClick={(e) =>
                {setTaskData({ ...taskData, category: e.target.innerHTML });
                setOpenDropdown(false);
              }}
            >
              {category.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
