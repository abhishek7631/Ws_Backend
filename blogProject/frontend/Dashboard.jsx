import React, { useEffect, useState } from "react";

function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {username ? username : "User"}</h1>
    </div>
  );
}

export default Dashboard;
