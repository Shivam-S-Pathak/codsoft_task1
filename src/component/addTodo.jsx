import styles from "./addTodo.module.css";
import { RiAddCircleFill } from "react-icons/ri";
const Addtodo = (props) => {
  return (
    <>
      <div className={styles.foot}>
        <RiAddCircleFill
          className={`${styles.addBtn} ${
            props.isShowing ? styles.hide : styles.show
          }`}
          onClick={props.handleClick}
        />
        <div
          className={`${styles.userInput} ${
            props.isShowing ? styles.show : styles.hide
          }`}
        >
          <input
            name="text"
            id="text"
            type="text"
            placeholder="Enter the task"
            className={styles.UserText}
            value={props.todoText}
            onChange={props.handleTextChange}
            required
          />
          <input
            type="date"
            name="date"
            id="date"
            value={props.todoDate}
            className={styles.UserDate}
            onChange={props.handleDateChange}
            required
          />
          <input
            type="time"
            name="time"
            id="time"
            value={props.todoTime}
            className={styles.UserTime}
            onChange={props.handleTimeChange}
            required
          />
          {props.isFormValid ? (
            <button
              className={`${styles.saveBtn}`}
              onClick={props.handleSubmit}
            >
              save
            </button>
          ) : (
            <button className={`${styles.saveBtnDisabled}`}>save</button>
          )}
        </div>
      </div>
    </>
  );
};
export default Addtodo;
