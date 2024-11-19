import React, { useState } from "react";

function Api() {
  // State to hold API data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the API
  const fetchUsers = async () => {
    setLoading(true); // Show loading state
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data); // Set the fetched data
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-5xl">User List</h1>
      <button onClick={fetchUsers} style={{ marginBottom: "20px", padding: "10px" }} className="bg-blue-700 hover:bg-green-700 duration-300 mt-5 rounded-md">
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      <table className="table-auto border-2 w-full">
        <thead className="border">
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-slate-600 hover:text-slate-300">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Api;