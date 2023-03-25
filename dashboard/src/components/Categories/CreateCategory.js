import React, { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { createCategory } from "../../Redux/Actions/CategoryAction";
const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  // const dispatch = useDispatch();
  const submitform = (e) => {
    e.preventDefault();
    console.log(categoryName);
    axios
      .post("http://localhost:5000/api/categories/", "arun")
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(createCategory(categoryName));
  };
  return (
    <div className="col-md-12 col-lg-4">
      <form onSubmit={submitform}>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Images</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            placeholder="Type here"
            className="form-control"
            rows="4"
          ></textarea>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3" type="submit">
            Create category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
