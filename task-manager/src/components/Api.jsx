import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

function Api() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  }, [page]);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card title="API Data">
      <div className="mb-4 flex gap-2">
        <input
          className="border rounded px-2 py-1 flex-grow"
          placeholder="Search posts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {loading && (
        <div className="flex justify-center items-center py-8">
          <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></span>
        </div>
      )}
      {error && <div className="text-red-600">{error}</div>}
      <ul className="grid gap-4 sm:grid-cols-2">
        {filtered.map((item) => (
          <li key={item.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow group hover:scale-[1.02] transition">
            <div className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-1">{item.title}</div>
            <div className="text-gray-600 dark:text-gray-300">{item.body}</div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="px-2 py-1">Page {page}</span>
        <Button
          variant="secondary"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

export default Api;