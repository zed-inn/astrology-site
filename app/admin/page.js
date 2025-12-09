"use client";
import { useState } from "react";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Simple hardcoded gate
  const handleLogin = () => {
    if (password === "secret123") setIsAuthenticated(true); // Matches your .env thought process
  };

  const addCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await fetch("/api/courses", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(data);
    alert("Course Added!");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center">
        <input
          type="password"
          placeholder="Admin Password"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white p-2 ml-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form
        onSubmit={addCourse}
        className="border p-4 rounded max-w-md space-y-2"
      >
        <h2 className="font-bold">Add New Course</h2>
        <input
          name="title"
          placeholder="Title"
          required
          className="w-full border p-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          className="w-full border p-2"
        />
        <input
          name="category"
          placeholder="Catrgory"
          required
          className="w-full border p-2"
        />
        <input
          name="imageUrl"
          placeholder="Image url"
          required
          className="w-full border p-2"
        />
        <button className="w-full bg-purple-600 text-white p-2 rounded">
          Add Course
        </button>
      </form>
    </div>
  );
}
