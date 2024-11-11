import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/")
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>This is the Home Page</h1>
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
            <p>{item.description}</p>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
