"use client";

import { useState } from "react";

export default function JobFilter() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    // You can implement search param update logic here
    console.log({ keyword, location, category });
  };

  return (
    <div className="bg-white p-4 border rounded-lg mb-6 grid md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 rounded w-full"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="border p-2 rounded w-full"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        className="border p-2 rounded w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="IT">IT & Software</option>
        <option value="Finance">Finance</option>
        <option value="Health">Health</option>
      </select>
      <button
        className="bg-blue-600 text-white rounded px-4 py-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
