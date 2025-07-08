import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Api() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const USERS_PER_PAGE = 5;

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(setUsers)
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  }, []);

  // Filter by name or email
  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase())
  );

  // Paginate filtered users
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = filtered.slice(startIndex, startIndex + USERS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / USERS_PER_PAGE);

  return (
    <Card title="📋 Users List">
      <div className="mb-4 flex gap-2">
        <input
          className="border rounded px-2 py-1 flex-grow"
          placeholder="Search by name or email"
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

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-2">
          {paginatedUsers.map((user) => (
          <li key={user.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow transition hover:scale-[1.02]">
            <div className="font-bold text-lg text-blue-700 dark:text-blue-300">{user.name}</div>
            <div className="text-gray-600 dark:text-gray-300">{user.email}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {user.company?.name} | {user.address?.city}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-4 justify-center">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="px-2 py-1">Page {page} of {totalPages}</span>
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

export default Api;
