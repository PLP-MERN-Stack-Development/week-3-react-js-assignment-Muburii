import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ApiPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card title="API Data (JSONPlaceholder)">
      <div className="mb-4 flex gap-2">
        <input
          className="border rounded px-2 py-1 flex-grow"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading && (
        <div className="py-6 text-center text-blue-500">Loading...</div>
      )}
      {error && (
        <div className="py-6 text-center text-red-500">{error}</div>
      )}

      <ul className="grid gap-4 sm:grid-cols-2">
        {filtered.map((item) => (
          <li
            key={item.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow hover:scale-[1.02] transition"
          >
            <h3 className="font-bold text-blue-700 dark:text-blue-300">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="secondary"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </Button>
        <span className="px-2 py-1 font-medium">Page {page}</span>
        <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </Card>
  );
}
