import React, { useEffect, useState } from "react";

const EditToDoForm = ({ editTodo, task }) => {
  //   states
  const [value, setValue] = useState(task.title);
  //   fetch data

  // functions
  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    console.log(value);
    editTodo(value, task.id);
  };
  return (
    <form className="form w-full mb-1 " onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" todo-input mr-2 rounded-md"
        placeholder={task.title}
      />
      <button
        type="submit"
        className=" rounded-md p-2  bg-[#8758ff] cursor-pointer text-white "
      >
        Update Task
      </button>
    </form>
  );
};

export default EditToDoForm;
