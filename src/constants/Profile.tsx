// src/components/ProfilePage.tsx
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    loadUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const addedUser = await response.json();
      setUsers([...users, addedUser]);
      setNewUser({ name: '', email: '' }); // Clear input fields after adding
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Profile Card */}
        <div className="bg-white p-6 rounded-md shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="rounded-full w-32 h-32 mb-4"
            />
            <h2 className="text-xl font-semibold">Nguyen A</h2>
            <p className="text-gray-500">Senior Developer</p>
            <p className="text-gray-500">Ha Noi, Viet Nam</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
              Upload Picture
            </button>
          </div>
        </div>

        {/* Right Profile Form */}
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Location"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Phone"
              />
            </div>
            <div>
              <label className="block text-gray-700">Time</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Time"
              />
            </div>
            <div>
              <label className="block text-gray-700">Author</label>
              <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                <option>--Author--</option>
                <option>Author 1</option>
                <option>Author 2</option>
              </select>
            </div>
            <div className="col-span-2">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-md shadow-lg mt-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Author</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan={3}>
                  No data available.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div>
            Rows per page:
            <select className="ml-2 border rounded-md p-1">
              <option>5</option>
              <option>10</option>
              <option>25</option>
            </select>
          </div>
          <div>
            0–0 of 0<button className="ml-4 p-1 rounded-md border">&lt;</button>
            <button className="ml-1 p-1 rounded-md border">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
