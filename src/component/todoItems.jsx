import { useState } from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
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
    newTodos.splice(n, 1);
    props.setTodos([...newTodos]);
  };

  return (
    <>
      <article
        className={`${styles.todoItemsContainer} ${
          isChecked ? styles.todoItemsContainerChecked : ""
        }`}
      >
        <div className={styles.discription}>
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
          <p className={styles.dateNtime}>
            {props.todoDate} {props.todoTime}
          </p>
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.editBtn}`}
            onClick={isChecked ? " " : () => props.startEditing(props.index)}
            title="Edit to-do"
          >
            <MdModeEdit className={styles.editIcon} />
          </button>
          <button
            className={`${styles.deleteBtn}`}
            onClick={() => handleDelete(props.index)}
          >
            <MdDeleteForever className={styles.deleteIcon} />
          </button>
        </div>
      </article>
    </>
  );
};

export default TodoItem;
