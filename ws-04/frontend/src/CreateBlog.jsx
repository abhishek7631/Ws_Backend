import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add", { title, description, image })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Your Blog</h2>

          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Image</label>
            <input
              type="text"
              placeholder="Enter Image Link"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
