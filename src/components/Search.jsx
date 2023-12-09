import { useState, useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  const getQuery = async (query) => {
    console.log(`Fetching ${query}...`);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => getQuery(query), 1000);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <form href="#" action="search">
      <input
        type="text"
        placeholder="Search by keyword"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
}
