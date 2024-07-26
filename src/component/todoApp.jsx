import styles from "./todoApp.module.css";
import TodoItem from "./todoItems";
import Addtodo from "./addTodo";
import { useState, useEffect } from "react";

const TodoApp = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [todoText, setTodoText] = useState("");
  const [todoTime, setTodoTime] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [checkedStatus, setCheckedStatus] = useState([]);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  const handleSubmit = () => {
    setTodos([...todos, { todoText, todoTime, todoDate }]);
    setCheckedStatus([...checkedStatus, false]);
    setTodoText("");
    setTodoTime("");
    setTodoDate("");
    setIsShowing(false);
    setIsEditing(false);
    setEditingIndex(null);
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

  const handleSaveEdit = (todoText, todoTime, todoDate, index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index] = { todoText, todoTime, todoDate };
      return newTodos;
    });
    setTodoText("");
    setTodoTime("");
    setTodoDate("");
    setIsShowing(false);
    setIsEditing(false);
    setEditingIndex(null);
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    const todo = todos[index];
    setTodoText(todo.todoText);
    setTodoTime(todo.todoTime);
    setTodoDate(todo.todoDate);
    setIsShowing(true);
  };

  const handleCheckboxChange = (index) => {
    setCheckedStatus((prevCheckedStatus) => {
      const newCheckedStatus = [...prevCheckedStatus];
      newCheckedStatus[index] = !newCheckedStatus[index];
      return newCheckedStatus;
    });
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    setCheckedStatus((prevCheckedStatus) =>
      prevCheckedStatus.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <main className={styles.appContainer}>
        <header className={styles.heading}>Todo List</header>
        <hr />
        <br />
        {todos.length === 0 ? (
          <p>Todo list is empty, please add something</p>
        ) : (
          <div className={styles.itemContainer}>
            {todos.map((item, i) => (
              <TodoItem
                key={i}
                index={i}
                todoText={item.todoText}
                todoTime={item.todoTime}
                todoDate={item.todoDate}
                todos={todos}
                setTodos={setTodos}
                setIsShowing={setIsShowing}
                isShowing={isShowing}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                startEditing={startEditing}
                isChecked={checkedStatus[i]}
                handleCheckboxChange={() => handleCheckboxChange(i)}
                handleDelete={() => handleDelete(i)}
              />
            ))}
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
            handleSaveEdit={() =>
              handleSaveEdit(todoText, todoTime, todoDate, editingIndex)
            }
            isEditing={isEditing}
          />
        </footer>
      </main>
    </>
  );
};

export default TodoApp;
