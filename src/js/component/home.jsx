import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <label
            for="exampleInputEmail1"
            className="form-label d-flex justify-content-center align-items-center"
          >
            <h1 className="display-3">To Do List</h1>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <ul className="list-group">
            <li className="list-group-item">An item</li>
			<li className="list-group-item">Quantity items left</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
