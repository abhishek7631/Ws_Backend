import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Home() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/delete/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        {blog.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <h2>{item.title}</h2>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
            <p>{item.description}</p>
            <Link to={`/update/${item.id}`} className="btn btn-primary me-2">
              Update
            </Link>
            <Button
              variant="danger"
              onClick={(e) => {
                handleDelete(item.id);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
