import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import Todo from "./Todo";
import EditToDoForm from "./EditToDoForm";

const ToDoWrapper = () => {
  // states
  const [tasks, setTasks] = useState([]);
  //   fetch
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const stored = JSON.parse(localStorage.getItem("tasks"));
      setTasks(stored);
    }
  }, []);

  //   functions
  const addTodo = (task) => {
    const newTask = {
      id: new Date().getTime().toString(),
      title: task,
      completed: false,
      isEditing: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };
  const deleteTask = (id) => {
    const updated = tasks.filter((task) => id !== task.id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };
  // clear
  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      )
    );
  };
  const editTodo = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map((task) =>
          task.id === id ? { ...task, isEditing: !task.isEditing } : task
        )
      )
    );
  };
  const editTask = (title, id) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
      )
    );
    localStorage.setItem(
      "no",
      JSON.stringify(
        tasks.map((todo) =>
          todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
        )
      )
    );
  };
  return (
    <div className="  bg-[#1A1A40] p-20  rounded-md">
      <h1 className="flex justify-center text-4xl font-bold mb-4">To Do app</h1>
      <ToDoForm addTodo={addTodo} />
      {tasks.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            deleteTask={deleteTask}
            task={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
