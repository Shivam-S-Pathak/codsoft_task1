import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

import { MdCheckBoxOutlineBlank } from "react-icons/md";

import styles from "./todoItems.module.css";

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = (n) => {
    const items = props.todos;
    const newTodos = [...items];
    newTodos.splice(props.index, 1);
    props.setTodos([...newTodos]);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div
          className={`${styles.todoItemsContainer} 
        } ${isChecked ? styles.todoItemsContainerChecked : ""}`}
        >
          {isChecked ? (
            <IoMdCheckboxOutline
              className={styles.checkBox}
              onClick={handleCheckboxChange}
            />
          ) : (
            <MdCheckBoxOutlineBlank
              className={styles.checkBox}
              onClick={handleCheckboxChange}
            />
          )}

          <p
            className={`${styles.todoText} ${isChecked ? styles.checked : ""}`}
          >
            {props.todoText}
          </p>
          <p
            className={`${styles.dateNtime} ${isChecked ? styles.checked : ""}`}
          >
            <span>{props.todoDate}</span>
            <span>{props.todoTime}</span>
          </p>
        </div>

        <button className={`${styles.deleteBtn}`} onClick={handleDelete}>
          <MdDeleteForever className={styles.deleteIcon} />
        </button>
      </div>
    </>
  );
};

export default TodoItem;
