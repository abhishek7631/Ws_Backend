import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

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
            <Button className="me-2" variant="info">
              Update
            </Button>
            <Button variant="danger">Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
