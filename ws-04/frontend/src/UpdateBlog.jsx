import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:5000/update/" + id, { title, description, image })
      .then((res) => {
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
          <h2>Update Your Blog</h2>

          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              value={title}
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
              value={description}
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
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-success">Update Blog</button>
        </form>
      </div>
    </div>
  );
}
