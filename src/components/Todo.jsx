import React from "react";

const Todo = ({ task, toggleComplete, deleteTask, editTodo }) => {
  return (
    // hover:bg-[#6b46c9]
    <div className=" my-4 cursor-pointer  flex justify-between items-center bg-[#141414] hover:bg-[#18273e]  text-white p-3 rounded-md">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={` w-full py-2  ${
          task.completed ? " text-[#EEC643] line-through  " : ""
        }`}
      >
        {task.title}
      </p>
      {/* delete $ edit */}
      <div className="flex gap-8">
        <p
          onClick={() => {
            editTodo(task.id);
          }}
          className=" cursor-pointer rounded-lg material-icons bg-blue-500 hover:bg-blue-600 p-2 duration-300 "
        >
          edit
        </p>
        <p
          onClick={() => {
            deleteTask(task.id);
          }}
          className=" cursor-pointer rounded-lg material-icons  bg-red-500 hover:bg-red-600 p-2 duration-300 "
        >
          delete
        </p>
      </div>
    </div>
  );
};

export default Todo;
