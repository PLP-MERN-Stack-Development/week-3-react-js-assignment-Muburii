// src/pages/ApiPage.jsx
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="p-2 border mb-4 w-full"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(post => (
          <Card key={post.id}>
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}