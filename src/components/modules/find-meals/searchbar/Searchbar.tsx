"use client";

import { setSearchState } from "@/redux/featured/find-meals/searchSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSearchState(input));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 items-center max-w-md mx-auto p-2 bg-white border rounded shadow-sm"
    >
      <input
        type="text"
        placeholder="Search meals..."
        className="flex-1 p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
