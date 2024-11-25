import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTasks([...tasks, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <label className="form-label d-flex justify-content-center align-items-center">
            <h1 className="display-3 title">To Do List</h1>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputText"
            aria-describedby="InputText"
            placeholder="Insert here your item to the list"
            onKeyDown={addTask}
          />

          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                {task}
                <i className="bi bi-trash"></i>
              </li>
            ))}

            <li className="list-group-item">Quantity items left</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
