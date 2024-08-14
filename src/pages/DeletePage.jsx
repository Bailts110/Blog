import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DeletePage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Deleted post:", data);
        alert("Post deleted successfully!");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        alert("Failed to delete post.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delete Post {id}</h1>
      <p className="mb-4">Are you sure you want to delete this post?</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? "Deleting..." : "Delete Post"}
      </button>
    </div>
  );
}
