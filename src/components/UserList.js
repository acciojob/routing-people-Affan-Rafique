import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users for the list
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        // Ensure consistent order (by id) so first item is /users/1
        const sorted = [...data].sort((a, b) => a.id - b.id);
        setUsers(sorted);
      })
      .catch(() => setUsers([]));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {/* Each li must contain an <a> with href like /users/1 */}
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
