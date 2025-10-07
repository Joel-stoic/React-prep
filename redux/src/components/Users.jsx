// src/components/Users.jsx
import React from "react";
import { useSelector } from "react-redux";

export default function Users() {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h2>Users Component</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((u, index) => (
            <li key={index}>
              <strong>{u.name}</strong> - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
