import styles from "./todoApp.module.css";
import TodoItem from "./todoItems";
import Addtodo from "./addTodo";
import { useState , useEffect} from "react";

const TodoApp = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const handleClick = () => {
    setIsShowing(!isShowing);
  };
  const [todoText, setTodoText] = useState("");
  const [todoTime, setTodoTime] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    setTodos([...todos, { todoText, todoTime, todoDate }]);
    setTodoText("");
    setTodoTime("");
    setTodoDate("");
    setIsShowing(false);
  };
  const handleTextChange = (e) => {
    setTodoText(e.target.value);
    validateForm();
  };
  const handleTimeChange = (e) => {
    setTodoTime(e.target.value);
    validateForm();
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
    validateForm();
  };
  const validateForm = () => {
    const isTextEmpty = todoText.trim() === "";
    const isDateEmpty = todoDate === "";
    const isTimeEmpty = !todoTime;

    setIsFormValid(!isTextEmpty && !isDateEmpty && !isTimeEmpty);
  };
  useEffect(() => {
    validateForm();
  }, [todoText, todoDate, todoTime]);

  return (
    <>
      <main className={styles.appContainer}>
        <header className={styles.heading}>Todo List</header>
        <hr />
        <br />
        {todos.length === 0 ? (
          <p>Todo list is empty please add something</p>
        ) : (
          <div className={styles.itemContainer}>
            {todos.map((item, i) => {
              return (
                <TodoItem
                  key={i}
                  index={i}
                  todoText={item.todoText}
                  todoTime={item.todoTime}
                  todoDate={item.todoDate}
                  todos={todos}
                  setTodos={setTodos}
                ></TodoItem>
              );
            })}
          </div>
        )}

        <footer>
          <Addtodo
            handleClick={handleClick}
            isShowing={isShowing}
            handleSubmit={handleSubmit}
            handleTextChange={handleTextChange}
            handleTimeChange={handleTimeChange}
            handleDateChange={handleDateChange}
            todoDate={todoDate}
            todoText={todoText}
            todoTime={todoTime}
            isFormValid={isFormValid}
          ></Addtodo>
        </footer>
      </main>
    </>
  );
};

export default TodoApp;
