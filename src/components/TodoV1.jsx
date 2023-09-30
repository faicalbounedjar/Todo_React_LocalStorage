import React, { useState, useEffect } from "react";

const Todo = () => {
  // initialize the tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  // fetchdata
  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const stored = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(stored);
    }
  }, []);

  // handle add Tasks
  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };
  // handle remove tasks
  const deleteTasks = (task) => {
    const updated = tasks.filter((t) => t.id !== task.id);
    // delete updated[task.id];
    setTasks(updated);
    localStorage.setItem("localTasks", JSON.stringify([updated]));
  };
  // clear
  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };

  return (
    <div className="flex flex-col items-center">
      {/* title */}
      <div className="m-14">
        <h1 className=" text-4xl font-bold">To-do Application</h1>
      </div>
      <div className="flex mb-5 ">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="rounded-md bg-gray-100 p-3 mr-3"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="material-icons px-5 bg-green-400 hover:bg-green-600 duration-300 text-white rounded-md "
        >
          add
        </button>
      </div>
      {/* tasks */}
      <div className="flex justify-center mb-2">
        {" "}
        You have{" "}
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? `${tasks.length} tasks`
          : null}
      </div>
      <div>
        {tasks?.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <React.Fragment key={task.id}>
                <div
                  className="flex  justify-between w-72 rounded-md p-2 mb-5 bg-slate-200"
                  key={task.id}
                >
                  <li className=" font-semibold p-2">{task.title}</li>
                  <div className="flex gap-5">
                    <button
                      // onClick={changeTask(task.id)}
                      className="material-icons bg-blue-500 text-white p-2 font-bold rounded-md hover:bg-blue-600"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        deleteTasks(task);
                      }}
                      className=" material-icons bg-red-500 text-white p-2 font-bold rounded-md hover:bg-red-600"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div
              onClick={handleClear}
              className="flex justify-center bg-red-500 text-white rounded-lg py-2 cursor-pointer hover:bg-red-800 material-icons"
            >
              clear
            </div>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Todo;
