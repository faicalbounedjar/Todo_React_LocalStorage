import React, { useEffect, useState } from "react";

const ToDoForm = ({ addTodo }) => {
  //   states
  const [task, setTask] = useState("");
  //   fetch data

  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      addTodo(task);
      setTask("");
    }
  };
  return (
    <form className="form w-full mb-1 " onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        className=" todo-input mr-2 rounded-md placeholder:text-white"
        placeholder="what is today's task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        type="submit"
        className=" rounded-md p-2  bg-[#141414] cursor-pointer text-white "
      >
        add Task
      </button>
    </form>
  );
};

export default ToDoForm;
