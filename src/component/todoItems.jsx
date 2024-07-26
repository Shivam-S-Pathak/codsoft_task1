import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./todoItems.module.css";

const TodoItem = (props) => {
  return (
    <>
      <article
        className={`${styles.todoItemsContainer} ${
          props.isChecked ? styles.todoItemsContainerChecked : ""
        }`}
      >
        <div className={styles.discription}>
          {props.isChecked ? (
            <IoMdCheckboxOutline
              className={styles.checkBox}
              onClick={props.handleCheckboxChange}
            />
          ) : (
            <MdCheckBoxOutlineBlank
              className={styles.checkBox}
              onClick={props.handleCheckboxChange}
            />
          )}

          <p
            className={`${styles.todoText} ${
              props.isChecked ? styles.checked : ""
            }`}
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
            onClick={props.isChecked ? null : () => props.startEditing(props.index)}
            title="Edit to-do"
          >
            <MdModeEdit className={styles.editIcon} />
          </button>
          <button
            className={`${styles.deleteBtn}`}
            onClick={props.handleDelete}
          >
            <MdDeleteForever className={styles.deleteIcon} />
          </button>
        </div>
      </article>
    </>
  );
};

export default TodoItem;
