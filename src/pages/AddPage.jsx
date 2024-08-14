import { useState } from "react";
import { api } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [userId, setUserId] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  

      api.post("https://dummyjson.com/posts/add", {
        userId: 1,
        title,
        body,
        tags: tags.split(',').map(tag => tag.trim()),
        })
        .then(() => {
        
        setTitle("");
        setBody("");
        setTags('');
        navigate('/'); 
        });}
  ;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Body
          </label>
          <textarea
            className="border rounded w-full py-2 px-3 text-gray-700"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tags (comma-separated)
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
